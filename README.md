# DrinkWise - Smart Bar Costing

A React web application for cocktail and bar costing. Calculate pour costs, cost per drink, and suggested pricing for your cocktails.

## Features

- ✅ Create and manage cocktails
- ✅ Add spirits and mixers with unit costs and quantities
- ✅ Automatic calculation of:
  - Total cost per drink
  - Pour cost percentage
  - Suggested selling price (based on target pour cost)
- ✅ Clean, modern UI with Tailwind CSS
- ✅ Persistent data storage with Supabase

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Supabase

1. Follow the instructions in `SUPABASE_SETUP.md` to:
   - Create a Supabase project
   - Get your API credentials
   - Set up the database tables

2. Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Run the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

## Usage

1. **Create a Cocktail**: Click "Create Cocktail" and enter the cocktail name
2. **Set Target Pour Cost**: Default is 30% pour cost (you can change this)
3. **Add Spirits & Mixers**: 
   - Enter spirit/mixer name
   - Enter unit cost (e.g., $2.50 per fl oz)
   - Enter quantity used (e.g., 1.5 fl oz)
   - Enter unit (default is fl oz)
4. **View Calculations**: The app automatically calculates:
   - Total cost per drink (sum of all spirit/mixer costs)
   - Suggested selling price (to achieve your target pour cost)
   - Pour cost percentage (if you enter a selling price)
5. **Save**: Click "Create Cocktail" to save to Supabase

## Terminology

- **Cocktail**: A drink recipe
- **Spirit/Mixer**: Ingredients used in cocktails (spirits, mixers, juices, etc.)
- **Pour Cost %**: The percentage of the selling price that goes to ingredient costs (similar to food cost %)
- **Cost per Drink**: Total cost of all spirits/mixers used in one cocktail
- **Default Units**: Fluid ounces (fl oz) for liquid measurements

## Project Structure

```
src/
  ├── components/          # React components
  │   ├── DishForm.jsx     # Form for creating/editing cocktails
  │   ├── DishCard.jsx     # Card displaying cocktail summary
  │   ├── IngredientForm.jsx
  │   ├── IngredientList.jsx
  │   └── CalculationsDisplay.jsx
  ├── services/            # Supabase service layer
  │   └── dishService.js
  ├── utils/               # Utility functions
  │   └── calculations.js
  ├── lib/                 # Third-party library configs
  │   └── supabase.js
  ├── App.jsx              # Main app component
  └── main.jsx             # Entry point
```

## Technologies

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Supabase** - Backend and database

## Note

This is a separate entity from PlateWise (food/menu costing). DrinkWise is specifically designed for cocktail and bar costing with terminology and defaults appropriate for the beverage industry.

## License

MIT
