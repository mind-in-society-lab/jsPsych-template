// TODO: Add these to immediately after the jsPsych init object
var subject_id = jsPsych.data.getURLVariable("participant");

jsPsych.data.addProperties({
    subject_id: subject_id,
});

// TODO: Configure the redirect link based on the instruction on sona, using `subject_id` embedded