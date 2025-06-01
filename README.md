Project Title: Blog Website
Link: https://rishikeshh08.github.io/Blog-Website/

Technologies: React.js, React Router, Context API, JavaScript, Fetch API, CSS3

Description
Built responsive blog website with dynamic routing system connecting 4+ page types (posts, categories,tags) using React Router
Integrated multiple API endpoints for content fetching across different blog categories and tags.
Implemented Context API for centralized state management, eliminating prop drilling across components 

Things i learned:
ContextAPI
useLocation
dynamic path in <Route>
handled nultiple apis throught single async function and useEffect
hide scroll bar while still being able to use scroll

Common Issue Faced – category.replace is not a function
While working on this project, I encountered a runtime error:
TypeError: category.replace is not a function
This error occurred when I clicked on a category/tag link immediately after a page reload. It typically happened before the data was fully fetched, meaning the category variable was either undefined, null, or not yet a string. So calling .replace() on it led to a crash.

Root Cause
category.replace(" ", "-")
even when category wasn’t ready or wasn’t a string. Since .replace() is a string method, this threw an error when category was anything else.

 How I Fixed It
I applied two key solutions:
1. Added a Loader
2. Used Defensive Programming: Ensured category was a string before calling .replace().

Takeaway
It's important to validate and sanitize data before performing string operations, especially in components that render based on asynchronous API responses. Adding basic type checks can prevent unnecessary crashes and improve UX.
