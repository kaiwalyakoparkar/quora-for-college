Feature: API is running

  Scenario: Login Existing User
    Given I make a POST request to http://localhost:8080/api/v1/users/login
    And I set body to
    """
    {"email": "studentUser@gespoly.org","password": "This is password"}
    """
    When I receive a response
    Then I expect response should have a status 200

  Scenario: Getting All Questions
    Given I make a GET request to http://localhost:8080/api/v1/questions/
    When I receive a response
    Then I expect response should have a status 200

  Scenario: Getting All Answers
    Given I make a GET request to http://localhost:8080/api/v1/answers/
    When I receive a response
    Then I expect response should have a status 200

  Scenario: Getting a single question
    Given I make a GET request to http://localhost:8080/api/v1/questions/61dd4b66875fa2ba15492c65
    When I receive a response
    Then I expect response should have a status 200

  Scenario: Getting a single answer
    Given I make a GET request to http://localhost:8080/api/v1/answers/61dd46f03cecd228e9df643a
    When I receive a response
    Then I expect response should have a status 200

  Scenario: Getting user data
    Given I make a GET request to http://localhost:8080/api/v1/users/me
    When I receive a response
    Then I expect response should have a status 401

  Scenario: Logout the user
    Given I make a GET request to http://localhost:8080/api/v1/users/logout
    When I receive a response
    Then I expect response should have a status 200

  Scenario: Signup New User
    Given I make a POST request to http://localhost:8080/api/v1/users/signup
    And I set body to
    """
    {"name": "test","email": "test@test.com","password": "this is test","passwordConfirm": "this is test", "yearOfAdmission": 2017, "courseYear": "Prof", "currentStatus": "Professor"}
    """
    When I receive a response
    Then I expect response should have a status 201
