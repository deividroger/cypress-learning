Feature: Testing Login for different types of users


    Each user should have a different experience

    Background: User should launch the site
        Given I launch the SwagLab site

    Scenario: A standard user should be able to login to SwagLabs
        
        And I insert the "standard" username
        And I insert the password
        When I click the Login button
        Then I should see the products page

    Scenario: A problem user should be able to login to SwagLabs
        
        And I insert the "problem" username
        And I insert the password
        When I click the Login button
        Then I should see the same product images

    Scenario: A performance user should experience a glitch while trying to login to SwagLabs
        
        And I insert the "glitch" username
        And I insert the password
        When I click the Login button
        Then I should see the products page

    Scenario: A problem user should unable to login to SwagLabs
        
        And I insert the "locked" username
        And I insert the password
        When I click the Login button
        Then I should see the error message