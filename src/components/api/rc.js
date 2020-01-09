export default [
    {
        rc_id: 1,
        rc_name: "India",
        rc_head: 10,
        visibility: 1,
        parent_id: 0,
        child_id: [4,5]
    },
    {
        rc_id: 2,
        rc_name: "USA",
        rc_head: 10,
        visibility: 0,
        parent_id: 0,
        child_id: []
    },
    {
        rc_id: 3,
        rc_name: "UK",
        rc_head: 10,
        visibility: 0,
        parent_id: 0,
        child_id: []
    },
    {
        rc_id: 4,
        rc_name: "West Bengal",
        rc_head: 10,
        visibility: 1,
        parent_id: 1,
        child_id: []
    },
    {
        rc_id: 5,
        rc_name: "Jharkhand",
        rc_head: 9,
        visibility: 1,
        parent_id: 1,
        child_id: [7]
        
    },
    {
        rc_id: 6,
        rc_name: "London",
        rc_head: 10,
        visibility: 1,
        parent_id: 3,
        child_id:[]
    },
    {
        rc_id:7,
        rc_name: "Ranchi",
        rc_head: 10,
        visibility:1,
        parent_id: 5,
        child_id: []
    }
]