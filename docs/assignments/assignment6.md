---
title: "Assignment 6 - User Testing and Analysis"
layout: doc
---

# Assignment 6 - User Testing and Analysis

## Prepopulated Data
NewsNet is a news social media platform, so the main form of data is in news articles. I have added 10 sample articles collected from news sites such as MIT News to create a realistic environment, and populated them with sample comments from different users. 

## Task List
| Title | Instuction | Rationale |
| --- | --- | --- |
| Register | Register with a new account for the app, and logout then login. | Required process for any NewsNet functionalities besides browsing articles. |
| Browse | Choose an article while browsing to read through. | Browsing articles is NewsNet's main purpose. In testing this, I hope to learn how accessible articles are, and whether the interface and visuals makes for a clean reading experience for mature users. Their opinion of the browsing experience may differ from mine, as I designed it in a way I found pleasing. |
| Search | Return to the homepage and search for the article you just browsed | For me, the current search functionality based on author is definitely not suitable for the purpose of a news browsing platform. I want to see how users respond to the current search, and figure the ways they would prefer to be able to search for an article. |
| Comment | Choose any article to comment on, then make a reply comment to any existing comments. | A central way that NewsNet differs from News Sites is its social media structure, allowing for discussions between users about articles. I want to test how easy it is for user to access comments, and to make their own, without any knowledge of how the interface functions. The subcomment interface also differs from the comment interface, and I want to figure out how users would feel about this format. |
| Verify | Verify your account so that you can post | In order to post content, users must be verified on NewsNet. I want to see how intuitive the process of verifying an account is, especially with no understanding of how the verification should work. 
| Post | Create an article. |  |
| Follow | Follow 5 other users. | Following is a social media feature incorporated into NewsNet that allows for a sense of community. It is intended to be a very simple process so as to encourage users to connect with each other. I want to know if a new user would feel comfortable with the process of following other users. |
| View Follows| View your following list for users that you are following. | I want users to be able to access the people that they are following or followed by. I am not sure how easy it is to navigate this for mature users, since I used Instagram's style of having follow counts in the profile page that are clicked to open a list. Especially for users unfamiliar with Instagram, I'm not sure if this is intuitive. |
| Message | Exchange messages with another user. | One purpose for mutually following users may be to chat with each other. This interface should be clean, accessible and provide a smooth experience, so as not to encourage users to opt out for a separate platform to send messages about NewsNet instead. The goal of having the messaging feature is to make it convenient for users to talk about news privately on NewsNet. |

## User Study 1: Carl Rodriguez
I conducted my first user test of NewsNet with Carl Rodriguez, a 43-year-old fintech professional who mentored me during my summer internship. Carl typically relies on news sources like the New York Times. 

When prompted, Carl quickly navigated the Registration and Login features. He did initially click on the "Post" tab instead of “Login,” but he found the correct button. He noted that hovering over buttons to preview their functions would enhance usability.

During the Browse task, Carl found the article layout straightforward, but critiqued the absence of dates at the top of articles (they are at the bottom). He also noted that the lack of paragraph spacing affected readability, and that the articles lacked pictures, which he thought would help visually.

Carl encountered issues with the Search function, which was limited to searching by author. Searching for an article about Boeing, he first tried typing in Boeing. Upon realizing it was by author, he typed in wall street journal without capital letters, and was unable to find results again. At this point, he showed some annoyance. He suggested that searches include more flexible options, such as content, date, and titles to simplify finding articles, and requiring only partial text rather than exact searches. 

The Comment feature was fairly simple for Carl. He made a comment and nested comment within a minute. When prompted for areas of improvement, Carl suggested that remaining on the article page after posting would provide a more seamless experience, as the platform currently moves users to a separate page for viewing and creating replies to comments. 

For Verification, Carl quickly navigated and submitted a request, which I then approved. He immediately went to his profile to check whether he was verified, where he found a check icon displaying his status. Although he navigated it quickly, I think that finding out whether a user is verified should be easier, especially for users with less experience with social medias. When watching him, I didn't think the process would be intuitive like he made it out to be.

Posting smooth, but he noted that the title didn’t clear automatically after submission. He also suggested implementing a text bar similar to Microsoft Word’s to allow for text formatting.

Carl found the Following users super simple, as the button being beside the authors allowed easy access. He found the following list straightforward as well, but expressed interest in clicking on usernames to view more user information, like background and recent posts. In Messages, he noted that incoming messages appeared only after refreshing and suggested adding real-time updates for smoother communication.

Overall, Carl described the platform as visually comfortable with its black and white scheme. His final recommendation was adding labels beneath icons to improve clarity, particularly for new users.

## User Study 2: Mr. Xiao
I conducted my second user test of NewsNet with Mr. Xiao, my father, who lives in California and regularly reads news on platforms like Medium and The Wall Street Journal. He navigated Registration smoothly without any issues.

In the Browse section, Mr. Xiao, like Carl, immediately noticed the lack of paragraph spacing, which he found disruptive to the reading experience. 

During the Search task, he found the author-based search restrictive. Instead, he suggested implementing a keyword-based search and adding filter options by category for easier access to specific topics. He ended up scrolling and copying "MIT News" into the search bar to locate the article he was looking for, which was definitely poor design.

The Comment feature initially seemed smooth, but Mr. Xiao found navigating back to the article page difficult, as he had to rely on the browser’s back arrow because there were no buttons to lead him back. He also noted that replies should remain on the article page rather than opening a new page.

For Verification, Mr. Xiao initially tried to self-approve his verification, then noticed he needed to submit a request. This is not a core issue since self approval was never meant to be a feature, but it did show the need for word instructions for more complicated matters like this. In Posting, he found that any new lines he added while writing the article disappeared upon posting, impacting the structure of longer texts.

Following was straightforward, though Mr. Xiao suggested adding a search bar to look up specific users to follow. And like Carl, he encountered the refresh requirement for messages and recommended real-time updates to improve the messaging experience.

Overall, Mr. Xiao thought the platform as visually appealing and clean, but felt certain functionalities needed improvement. 

## Design Flaws/Opportunities
1. **Comments Remaining on Article - Physical, Moderate**
    - **What:** When replying to comments, users are taken to a separate page. 
    - **Why:** This prevents them from addressing the original article when commenting, and disrupts the viewing experience if they are trying to comment while reading. 
    - **Solution:** Keep comments and replies on the original article page, perhaps as a collapsible section, and add a "back" button to allow easy navigation through pages. 

2. **Enhanced Formatting for Posting Articles - Conceptual, Major**
    - **What:** Users lack control over paragraph spacing, text options, and image inclusion. 
    - **Why:** To convey their content in an appealing manner, authors need formatting tools that are not provided in NewsNet's posting function.This also makes articles on NewsNet less appealing to read.
    - **Solution:** Add formatting options as a top bar that allows paragraph spacing, text options, image inclusion, and more. 

3. **Better Searching - Conceptual, Critical**
    - **What:** The search tool is limited to author, and the search must exactly match the author string.
    - **Why:** To search for an article, users would much rather search for a convenient keyword. Finding the author and then navigating through their articles to find a certain one is very bothersome.
    - **Solution:** Implement a comprehensive search with options to filter by keywords, author, title, and date, along with category filters to improve browsing.

4. **Direct Following - Conceptual, Major**
    - **What:** Users cannot follow other users unless they find an article or comment posted by the user.
    - **Why:** Users should be able to easily follow each other, without searching for content posted by one another. For instance, if a user wants to follow an unverified user, the unverified user would have to make a comment to be found by the user, which is very unconvenient. 
    - **Solution:** Introduce a direct search function for following, letting them locate and follow others without needing prior content exposure.

5. **Icon Labels - Linguistic, Minor**
    - **What:** Navigation-bar is icon only. 
    - **Why:** New users may be confused by what each tab is, especially without prior exposure to social media apps that use such icons. 
    - **Solution:** Add concise text labels under icons to improve clarity and assist new users in quickly understanding the interface.

