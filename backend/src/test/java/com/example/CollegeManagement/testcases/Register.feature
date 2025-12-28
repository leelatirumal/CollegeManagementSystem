Feature:
  Scenario: login
    Given url "http://localhost:8083/api/user/register"
    And request {}
    And method post
    And status 201