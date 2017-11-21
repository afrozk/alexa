# Build a "Quoter" Alexa Skill


Each Alexa skill is comprised of an “Invocation Name” which you can think of as your app name, a set of “Intents” and the phrases that map to each intent, and the software that can detect the intent and return an appropriate result.

For example : Alexa, Ask "Quoter" for a new quote. "Quoter" is an Invocation and "for a new quote" is an "Intent".

The skill we’re going to build is going to be a "Daily Quote" program.

Building your first skill will comprise of four steps. 

1. Copy the “Quoter” code into Amazon Lambda, which will be responsible for running the code. 
2. Set up our skill in the Amazon Alexa Skills Developer Portal, and link our lambda account to that skill. 
3. Test using the Amazon service simulator and on an Alexa-enabled device. 
4. Walk through the steps of customizing your skill to your needs.


## Step 1

* Login or create an account at https://aws.amazon.com/ with the same Amazon account that your Alexa device is linked to.

Go to lambda service in Amazon. Click Create Function. Search Alexa under Blueprints. Select "alexa-skill-kit-sdk-factskill" from blueprint as shown in the screen.
Enter the name of your Lambda function. It’s not very important what the name is but it needs to be unique, you can just use “myQuoter”. In the top right it next to your name it should say “Ireland”. If that’s not the case please select “EU (Ireland)” from the dropdown. Choose "LamdaPostsReaderRole"

Copy the [Quoter application source code](https://github.com/afrozk/alexa/blob/master/src/index.js)

Back in Lambda, you’re going to scroll down a bit and paste the code you copied from GitHub into the large text box under “Lambda function code”.



Scroll down a bit further to the “Lambda function handler and role” section. You’re going to want to set the role to “lambda\_basic\_execution”. It’s important to note that if this is your first time using Lambda, you’ll have to create the “lambda\_basic\_execution” role. You can do that by selecting the first option “* Basic Execution” and clicking the blue button on the next page. After you take that step, you should be able to select “lambda\_basic\_execution”.


Once you’ve created the function, click on the “Triggers” tab, then click the “Add Trigger” link, then select “Alexa Skills Kit” from the model dropdown.

Please note if you’ve never signed up for the [Amazon Developer Portal](https://developer.amazon.com/edw/home.html#/skills/list), you’ll have to do that first before the “Alexa Skills Kit” will appear from the Event Sources dropdown. Please also make sure you use the same Amazon account as the one you’re using for AWS and your Echo Device.


Keep the Amazon Lambda tab open though, we’ll need to come back to it!

## Step 2



Open the [Amazon Developer Skills portal](https://developer.amazon.com/edw/home.html#/skills/list) and login with the same Amazon account that your Alexa device is linked with.


Click the yellow “Get Started >” button under “Alexa Skills Kit”, then the yellow “Add a New Skill” button on the next page.

Choose English (India) under language selection.

The name of your Amazon Alexa skill must be unique for your account, and the invocation name is what you’ll use to activate the skill. “Alexa, tell <invocation name> to say a Quote”.  Click the yellow “Next” button when you’re ready!

Here is where we’re going to tell the skill which intents we support, and what type of words will trigger each intent. Get ready for some copy and pasting.


Open the [Daily Quote intent schema](https://github.com/afrozk/alexa/blob/master/speechAssets/IntentSchema.json) and copy all of the text in the box.

Paste it under Intent Schema Box.

Open the [Daily Quote sample utterances](https://github.com/afrozk/alexa/blob/master/speechAssets/SampleUtterances.txt) and copy all of the text in the box.


Back in the Amazon Skills portal, paste the sample utterances you copied into the Sample Utterances field. Click the yellow “Next” button after you’ve pasted the Sample Utterances.

Change the radio button from “HTTPS” to “Lambda ARN” and select the “No” radio button under Account Linking. Now we’ll have to go and grab the Lambda Amazon Resource Name (ARN) from our Lambda tab. You still have that open, right?


The ARN is on the top right of the Lambda function page. I have it selected in the image above. You’ll want to copy the selection as I have it above.

Paste the ARN into the text field, and press “Next”.


## Step 3


After you click “Next” on the “Configuration” tab, you should be on the “Test” tab. Under the “Service Simulator” portion you’ll be able to enter a sample utterance to trigger your skill. For the “Quoter” example you should type tell me a Quote”, and on the right you should see the output from the Lambda function you created: “Quoter”

If you got the correct output using the Service Simulator, try it on the Amazon Echo. We were using “Quoter” as the invocation name in this presentation, but you should use the invocation name you set in step 2.

> Alexa, ask Quoter to tell a new quote


Congrats, you just created your quote Alexa skill! 👏👏

