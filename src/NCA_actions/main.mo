import TrieMap "mo:base/TrieMap";
import Principal "mo:base/Principal";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Blob "mo:base/Blob";
import Iter "mo:base/Iter";
import Debug "mo:base/Debug";
import Array "mo:base/Array";
import Bool "mo:base/Bool";
import Time "mo:base/Time";
import Buffer "mo:base/Buffer";
import Vector "mo:vector/Class";
import Random "mo:base/Random";
import Result "mo:base/Result";
import Error "mo:base/Error";
import Order "mo:base/Order";
import Int "mo:base/Int";
import TextX "mo:xtended-text/TextX";
import Fuzz "mo:fuzz";
import UUID "mo:uuid/UUID";
import Source "mo:uuid/async/SourceV4";

actor ActionActor {

    type Action = {
        id : Text;
        user_id : Principal;
        action_type : Text; 
        timestamp : Time.Time;
        details : Text; 
    };

    let actions = TrieMap.TrieMap<Text, Action>(Text.equal, Text.hash);

    public query func getActionsSize() : async Result.Result<Nat, Text> {
        // Directly get the size of the TrieMap
        let size = actions.size();

        // Return the size of the TrieMap
        return #ok(size);
    };

    type UserCoins = {
        user_id : Principal;
        balance : Nat;  // Balance of green coins for each user
    };

    let action_rewards = TrieMap.TrieMap<Text, Nat>(Text.equal, Text.hash); // Initialize empty TrieMap
    let user_balances = TrieMap.TrieMap<Principal, UserCoins>(Principal.equal, Principal.hash);

    type CreateActionInput = {
        action_type : Text; 
        details : Text;      
    };

    // Register a new action and reward the user
   public shared (msg) func registerAction(newAction : CreateActionInput) : async Result.Result<Action, Text> {
        let id = await generateUUID();  // Generate a unique ID for the action

        let action = {
            id = id;
            user_id = msg.caller;
            action_type = newAction.action_type;
            timestamp = Time.now();
            details = newAction.details;
        };

        // Add the action to the TrieMap
        actions.put(action.id, action);

        // Reward the user
        let rewardResult = await rewardUser(action.user_id, action.action_type);
        
        // Check if rewarding was successful
        switch (rewardResult) {
            case (#ok) { 
                return #ok(action);  // If successful, return the action
            };
            case (#err e) { 
                return #err(e);  // Return the error if rewarding failed
            };
        };
    };

    // Reward the user with green coins based on the action completed
    public func rewardUser(userId : Principal, actionType : Text) : async Result.Result<(), Text> {
        // Retrieve the reward for the action type
        let reward_amount = switch (action_rewards.get(actionType)) {
            case null { return #err("Action type not found or reward not defined"); };
            case (?reward) { reward };
        };

        // In this case, you would send the reward to the user somehow (e.g., minting coins)
        // For now, we just return a success.
        
        // Placeholder logic for rewarding the user
        Debug.print("Rewarding user: " #Principal.toText(userId) # " with " #Nat.toText(reward_amount) # " green coins");

        return #ok(());  // Indicating success
    };

    // Get the current green coin balance of a user
    public shared query (msg) func getUserBalance() : async Result.Result<Nat, Text> {
        let user_id = msg.caller;

        // Retrieve the user's coin balance
        let balance = switch (user_balances.get(user_id)) {
            case null { return #err("User has no green coin balance"); };
            case (?balance) { balance.balance }
        };

        return #ok(balance);
    };

    // Get all actions
    public shared query func getActions() : async Result.Result<[Action], Text> {
        let actions_array : [Action] = Iter.toArray(actions.vals());
        return #ok(actions_array);
    };

    // Get actions by a specific user
    public shared query (msg) func getUserActions() : async Result.Result<[Action], Text> {
        let user_id = msg.caller;
        let actions_list : [Action] = Iter.toArray(actions.vals());
        let user_actions = Vector.Vector<Action>();

        // Filter actions by the user's principal
        for (action in actions_list.vals()) {
            if (action.user_id == user_id) {
                user_actions.add(action);
            };
        };

        return #ok(Vector.toArray(user_actions));
    };

    public func init() {
        action_rewards.put("walking", 1); // 0.01 green coins
        action_rewards.put("biking", 1);  // 0.01 green coins
        action_rewards.put("electriccar", 1);  // 0.01 green coins
        action_rewards.put("public trans", 1);  // 0.01 green coins
        action_rewards.put("recycle", 1);  // 0.01 green coins
        action_rewards.put("tree", 1);  // 0.01 green coins
        action_rewards.put("solar", 1);  // 0.01 green coins
    };

    // Get available action types
    public shared query func getActionTypes() : async [Text] {
        let action_types = [
            "walking", 
            "biking", 
            "electriccar", 
            "public trans", 
            "recycle", 
            "tree", 
            "solar"
        ];
        return action_types;
    };

    // Get a specific action by ID
    public query func getAction(id : Text) : async Result.Result<Action, Text> {
        let action = actions.get(id);

        switch (action) {
            case null {
                return #err("Action not found");
            };
            case (?a) {
                return #ok(a);
            };
        };
    };

    // Update an action's details by ID (only for the user who created it)
    public shared (msg) func updateAction(id : Text, newDetails : Text) : async Result.Result<(), Text> {
        let action = actions.get(id);

        switch (action) {
            case null {
                return #err("Action not found");
            };
            case (?a) {
                if (a.user_id != msg.caller) {
                    return #err("Not authorized to update this action");
                };

                // Update action with new details
                let updatedAction = {
                    id = a.id;
                    user_id = a.user_id;
                    action_type = a.action_type;
                    timestamp = a.timestamp;
                    details = newDetails;
                };

                actions.put(id, updatedAction);

                return #ok();
            };
        };
    };

    // Function to generate a UUID based on the current time and the caller's Principal
    public shared func generateUUID() : async Text {
        let g = Source.Source();
        return UUID.toText(await g.new());
    };

}
