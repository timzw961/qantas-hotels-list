# Instructions

To run this Next.js application:

1. Ensure you have Node.js (version 16 or later recommended) and npm installed.
2. Clone the repository: git clone <https://github.com/timzw961/qantas-hotels-list.git>
3. Navigate to the project directory: cd qantas-hotels-list
4. Install dependencies: npm install
5. Run tests: npm run test
6. Start the development server: npm run dev
7. Access the application in your browser at <http://localhost:3000>

If you encounter any issues, please ensure you have the correct Node.js and npm versions installed.

## Comments and Approach

My initial step was to analyze the Qantas Hotels site itself to understand its technical architecture. Observing the likely use of Next.js with the App Router, I selected this framework for my implementation. While the Pages Router was an option, I opted for the App Router due to its support for server components, a feature I believe Qantas Hotels utilizes for enhanced performance and scalability.

The development process began with examining the provided `data.json` file. I then defined the necessary TypeScript types to represent the various elements of the Hotel components. My initial focus was building the hotel list display, omitting sorting and rating functionality in the first iteration to align with the provided mockup.

Subsequently, I decomposed the components into smaller, more manageable units, such as `Rating`, `Price`, and `HotelHeader`, implementing unit tests for each.

My choice of the Next.js App Router stems from its modern development experience and ability to leverage both server and client components, along with the latest React features. This aligns with the apparent technical direction of the Qantas Hotels website.

Due to time constraints, certain aspects of the component's full functionality were simplified or omitted to focus on core requirements. These include:

*   **Location Information:**  The component currently does not display location details.
*   **Hotel Offerings Link:**  Links to specific hotel offers are not implemented.
*   **Pagination:**  Pagination for a large list of hotels is not included.
*   **Error Handling:**  An error page for scenarios with no data is not implemented.
*   **Dynamic Pricing:**  The component currently displays the price for a single night only.  Calculation of the total price based on multiple nights is not included.
*   **Data Assumptions:**  The implementation assumes the structure and consistency of the provided `data.json` file.

Furthermore, responsiveness and accessibility considerations were identified as areas for future improvement. For example, the current rating component requires further work to meet accessibility standards. While using external component libraries could have potentially saved time (especially for the rating component), I chose to avoid external dependencies for this exercise.

I aimed for at least 80% unit test coverage.  While I achieved this for individual components, time constraints prevented full test coverage for the hotel list component itself.

## Commit history

You will be able to see the commit history in the github repo: <https://github.com/timzw961/qantas-hotels-list>
