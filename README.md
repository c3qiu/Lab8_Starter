# Lab 8 - Starter
1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
   - Within a Github action that runs whenever code is pushed. It will be easier and more efficient for developers to compile, build, and deploy their code for their projects.
  
2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)
   - No.
   
3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   - No. For unit tests, we know that each unit test should be small and test only a limited piece of code functionality. However, the scale of the “message” feature is large, so this feature allows a user to write and send a message to another user. Thus, it will be hard to track how each function interacts with one another.
  
4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
   - Yes. The scale of "max message length" feature is small such that this feature prevents the user from typing more than 80 characters. Also, “max message length” is not too complicated for us to test on it.

