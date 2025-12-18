# Market Statistics Data Management

This directory contains the market statistics data for the Greater Springfield Board of Realtors website.

## How It Works

The market statistics page automatically displays the latest data and compares it to the same month in the previous year. All you need to do is add new data files, and the system handles everything else!

## Adding New Statistics

1. **Copy the template**: Use `_template.yml` as a starting point
2. **Rename the file**: Use the format `YYYY-MM.yml` (e.g., `2025-05.yml` for May 2025)
3. **Fill in the data**: Replace all the placeholder values with actual statistics
4. **Save the file**: The website will automatically update with the new data

## File Naming Convention

- `YYYY-MM.yml` where:
  - `YYYY` = 4-digit year (e.g., 2025)
  - `MM` = 2-digit month (01-12)

Examples:

- `2025-01.yml` for January 2025
- `2025-12.yml` for December 2025

## Data Structure

Each file contains:

### Required Fields

- `title`: Display title for the report
- `report_date`: Date in YYYY-MM-DD format
- `year`: Numeric year
- `month`: Month name (e.g., "January", "February")
- `prepared_by`: Organization that prepared the report
- `notes`: Additional information about the data

### Statistics Sections

- `greater_springfield_area`: Overall area statistics
- `counties`: Individual county data (Greene, Christian, Webster)

### Metrics for Each Section

- `total_units_sold`: Number of units sold
- `total_volume`: Total dollar volume of sales
- `average_sale_price`: Average sale price
- `median_sale_price`: Median sale price
- `average_days_on_market`: Average days properties spent on market
- `cumulative_days_on_market`: Cumulative days on market

## Features

### Automatic Year-over-Year Comparisons

The system automatically finds data from the same month in the previous year and displays:

- Percentage change (increase/decrease)
- Visual indicators (green for increases, red for decreases)
- Trend arrows

### Responsive Design

The statistics display beautifully on desktop, tablet, and mobile devices.

### SEO Optimized

Each page includes proper meta tags and structured data for search engines.

## Example Usage

To add May 2025 statistics:

1. Copy `_template.yml` to `2025-05.yml`
2. Update the fields:
   ```yaml
   title: "May 2025 Market Statistics"
   report_date: "2025-05-01"
   year: 2025
   month: "May"
   ```
3. Fill in all the numeric values
4. Save the file

The system will automatically:

- Display May 2025 as the current period
- Compare it to May 2024 (if that file exists)
- Show percentage changes and trends
- Update the page immediately

## Data Validation

The system includes schema validation to ensure data integrity:

- All required fields must be present
- Numeric fields must contain valid numbers
- Dates must be in the correct format

If there's an error in your data file, the build process will show you exactly what needs to be fixed.

## Questions?

If you need help adding or updating market statistics data, please contact the development team.
