trigger ClosedOpportunityTrigger on Opportunity (after insert, after update) {

    List<Task> taskList = new List<Task>();
    
    for (Opportunity op : [SELECT Id, StageName from Opportunity WHERE StageName = 'Closed Won' AND Id IN: trigger.new]){
        taskList.add(new Task(whatId = op.Id));
    }
    
    insert taskList;
}