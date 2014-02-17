FETA
====
FETA is a Facial Expression Training Application for security, educational, and health professionals. The user is provided exercise, expression, and glossary sections.

* Utilize the expressions section to learn about the qualitative and quantitative meanings to the emotional expression.
* Utilize the exercises to either (a) test yourself on your ability to recognize facial affect or (b) text someone else's ability to recognize facial affect.
* The Glossary is provided to you as means to research terms such as facial muscles, emotions, and action units.

Quick Start
-----------------
To boot up the app:

1. Ensure that you have Grunt and Bower installed.
2. Clone the git repository from <code>git@github.com:BenMorganIO/FETA.git</code>
3. Run <code>bower install</code> to install the frameworks
4. Run <code>grunt install</code> to install all the framework dependencies
5. When finished, you are now ready to boot up FETA via <code>grunt serve</code>

Deployment
-----------------
When you wish to have a production ready version, use <code>grunt build</code>. The minified files will be stored within the <code>dist</code> directory.