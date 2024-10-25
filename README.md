# Instagram Clone - React Native with Expo

This project is a simplified Instagram clone built using **React Native** with **Expo**. It fetches posts from an API and displays them in a feed similar to Instagram. Key features include a tab-based navigation system and dynamic post loading with pagination.

## Avatar URL Issue

The project initially aimed to load avatar images from a given API. However, due to accessibility issues with the URLs (e.g., **DNS_PROBE_FINISHED_NXDOMAIN**), the avatar images could not be fetched successfully. As a fallback, a default avatar image is provided for cases where the image URL is not accessible.

## Loading Posts

By default, the app fetches and loads posts in batches. This prevents overloading the app by downloading all posts at once. Additionally, it provides a seamless scrolling experience, fetching more posts as the user scrolls down.

### Potential Improvement: Clear Posts on Tab Change

Currently, the posts are retained when navigating between tabs. If the number of posts becomes very large, this might lead to increased memory usage. A possible optimization is to clear the posts from the state when switching away from the home tab, reducing memory consumption and ensuring the app remains performant. This could be implemented using **React Navigation**'s lifecycle events (`focus` and `blur`).

## How to Run the App

1. Clone the repository.
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Add your environment variables in `.env` file (e.g., API URL).
4. Run the app:
    ```bash
    npx expo start
    ```

## Future Improvements

- **Caching**: Implement caching for the posts to avoid redundant API calls when switching tabs.

