# GitTrends

GitTrends is a small web application that lists the most starred Github repositories created within a specified time period. Additionally, it provides a simple drill-down feature that displays a time series graph of various metrics for the selected repository.

## Features

- List the most starred Github repos created in the last 1 week, 2 weeks, or 1 month.
- Identify the period of time to search for most starred repos.
- Display repository details in a list format, including repository name, description, number of stars, number of issues, username, and avatar of the owner.
- Pagination support for continuous scrolling to fetch more results.
- Drill down into each repository to see commit activity on a weekly basis for up to a year of the most recent history.
- Dropdown option for selecting additions or deletions for commits.
- Total number of changes across all contributors per week displayed in a graph.
- Multiline plot showing each contributor's total changes per week with a legend for toggling.
- Human-readable x-axis labels for weeks by start dates and y-axis for counts.

## Technologies Used

- React (with hooks)
- Highcharts
- Axios
- Highcharts

## Getting Started

To get started with GitTrends, follow these steps:

1. Clone the repository:

```
git clone <repository_url>
```

2. Install dependencies:

```
npm install
```

3. Start the development server:

```
npm run dev
```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Data Fetching

GitTrends fetches data directly from the Github API. It uses endpoints like `/search/repositories` to retrieve the most starred repositories and `/repos/{owner}/{repo}/stats` to fetch commit activity and code frequency data.

## Contribution

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## Credits

GitTrends was created by [Your Name]. It is licensed under the [MIT License](LICENSE).
