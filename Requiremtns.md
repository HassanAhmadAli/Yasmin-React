### **I. Base Features (Task 5)**

**Project Title**: Interactive Blog  
**Level**: Beginner to Intermediate  
**Goal**: Learn data fetching from multiple sources, routing, and user interaction handling.

#### 🔗 **API Endpoints**

1. **Posts**: `https://jsonplaceholder.typicode.com/posts`
2. **Authors**: `https://jsonplaceholder.typicode.com/users`
3. **Comments**: `https://jsonplaceholder.typicode.com/comments?postId={id}`

#### 📚 **Required Tasks**

1. **Fetch Posts**

   - Use Axios/fetch to retrieve posts.
   - Each post contains: `title`, `body`, `userId`.

2. **Fetch Author Information**

   - Use `userId` to fetch author details (name, email, company name).
   - Display author name on each post card.

3. **Posts List Page**

   - Design responsive UI with Tailwind CSS.
   - Display posts as cards showing:
     - Post title
     - Excerpt (first 20–30 words)
     - Author name
   - Clicking a card navigates to post details.

4. **Post Details Page**

   - Display full title, content, and author name.
   - Show author details (email, company name).
   - Include a comments section.

5. **Fetch & Display Comments**

   - Use `postId` to fetch comments.
   - Display each comment (name, email, body).

6. **Add New Comment**

   - Include a form with fields:
     - User name
     - Email
     - Comment body
   - On submission:
     - Add comment locally (using `useState`).
     - _Do not persist to API_.

7. **Loading & Error States**
   - Show "Loading..."/skeleton during data fetch.
   - Display clear error messages on failure.

#### 📱 **UI Requirements**

- Fully responsive (mobile/desktop).
- Clean, organized layout using **Tailwind CSS only**.

#### ⚙️ **Optional Challenges**

- Add post search by title.
- Use Zustand for comment state management.
- Support local comment editing/deletion.

---

### **II. Extended Features (Task 6)**

**Goal**: Enhance UX with user authentication, personalization, and state management.

#### 📚 **Required Tasks**

1. **User Login**

   - Simple login form (email only).
   - On submit:
     - Store email in `localStorage`/Zustand.
     - Set login state.
   - Add logout button (clears user data).

2. **Favorites System**

   - Add ⭐ button to posts (home/details page).
   - On click:
     - Mark post as favorite for the logged-in user.
     - Store favorites in `localStorage`.
   - Create `/favorites` page displaying user’s favorites.

3. **Personal Comments Management**

   - Allow logged-in users to:
     - Edit their comments (via edit button).
     - Delete their comments (via 🗑 button).
   - Manage comments locally (useState/Zustand).

4. **Profile Page**

   - Route: `/profile`
   - Display:
     - Current user’s email.
     - Count of favorited posts.
     - Count of comments added.
     - Logout button.

5. **Access Control**
   - Restrict for non-logged-in users:
     - Adding comments.
     - Access to `/favorites` and `/profile`.
   - Redirect to login page/alert on unauthorized access.

#### 🎨 **Design & Interaction**

- Consistent, polished UI with Tailwind CSS.
- Implement routing via React Router.
- Show loading/error states where needed.
- Display "No results" for empty favorites/comments.

#### ⚙️ **Optional Enhancements**

- Custom 404 page.
- Display comment timestamps (formatted).
- Toast notifications for login/edits/deletions.
- Persist user data (comments/favorites) with Zustand + `localStorage`.

---

### **📦 Submission**

- GitHub repository (new or existing).
- `README.md` including:
  - Setup instructions.
  - Login mechanism.
  - Page routes (`/favorites`, `/profile`, etc.).
- Clean, well-structured code.

---

**Note**: All features must be implemented in a single React project.
