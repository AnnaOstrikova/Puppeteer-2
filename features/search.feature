Feature: Search a course
    Scenario: The reservation of free space
        Given user is on "http://qamid.tmweb.ru/client/index.php" page
        When user click on the movie seance time
        And user click on a free seat
        And user click on the accept button
        Then user sees sees the title "Вы выбрали билеты:"

    # Scenario: TThe reservation of VIP-space
    #     Given user is on "https://qamid.tmweb.ru/client/hall.php" page
    #     When user selects VIP-space
    #     Then user sees sees the title "Вы выбрали билеты:"

    # Scenario: The reserved seat reservation
    #     Given user is on "https://qamid.tmweb.ru/client/hall.php" page
    #     When user selects reserved seat
    #     Then the "book" button is inactive
