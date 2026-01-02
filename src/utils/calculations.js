import { calculateIngredientCost } from './unitConversions'

/**
 * Calculate total cost per drink from spirits/mixers
 * Formula: Cost per drink = sum of (spirit/mixer unit cost × quantity)
 * 
 * For package-based spirits/mixers: 
 *   unit_cost = package_cost / package_size
 *   cost = unit_cost × quantity_used
 * 
 * @param {Array} ingredients - Array of spirit/mixer objects
 * @returns {number} Total cost per drink
 */
export const calculatePlateCost = (ingredients) => {
  if (!ingredients || ingredients.length === 0) return 0
  
  // Sum all spirit/mixer costs: Cost per drink = Σ(unit_cost × quantity)
  return ingredients.reduce((total, ingredient) => {
    let cost = 0
    
    // Package-based calculation (new method)
    // Formula: cost = (package_cost / package_size) × quantity_used
    // This is equivalent to: unit_cost × quantity where unit_cost = package_cost / package_size
    if (ingredient.package_cost && ingredient.package_size && ingredient.package_unit) {
      cost = calculateIngredientCost(
        parseFloat(ingredient.package_cost),
        parseFloat(ingredient.package_size),
        ingredient.package_unit,
        parseFloat(ingredient.quantity || 0),
        ingredient.unit || 'fl oz'
      )
    } else {
      // Direct calculation (fallback for old format)
      // Formula: cost = unit_cost × quantity
      cost = parseFloat(ingredient.unit_cost || 0) * parseFloat(ingredient.quantity || 0)
    }
    
    return total + cost
  }, 0)
}

/**
 * Calculate pour cost percentage
 * Formula: Pour cost % = (cost per drink / selling price) × 100
 * 
 * Example: If cost per drink is $3.00 and selling price is $10.00
 *   Pour cost % = ($3.00 / $10.00) × 100 = 30%
 * 
 * @param {number} plateCost - Total cost per drink
 * @param {number} sellingPrice - Selling price of the cocktail
 * @returns {number} Pour cost percentage (0-100)
 */
export const calculateFoodCostPercentage = (plateCost, sellingPrice) => {
  if (!sellingPrice || sellingPrice === 0) return 0
  
  // Formula: Pour cost % = (cost per drink / selling price) × 100
  return (plateCost / sellingPrice) * 100
}

/**
 * Calculate suggested selling price based on target pour cost percentage
 * Formula: Suggested selling price = cost per drink / (target pour cost % / 100)
 * 
 * Derivation:
 *   - We want: cost_per_drink = selling_price × (target_pour_cost_% / 100)
 *   - Solving for selling_price: selling_price = cost_per_drink / (target_pour_cost_% / 100)
 * 
 * Example: If cost per drink is $3.00 and target is 30%
 *   Suggested price = $3.00 / (30 / 100) = $3.00 / 0.30 = $10.00
 *   Verification: $3.00 / $10.00 = 30% ✓
 * 
 * @param {number} plateCost - Total cost per drink
 * @param {number} targetMargin - Target pour cost percentage (e.g., 30 for 30%)
 * @returns {number} Suggested selling price
 */
export const calculateSuggestedPrice = (plateCost, targetMargin = 30) => {
  if (!plateCost || plateCost === 0) return 0
  if (!targetMargin || targetMargin === 0) return 0
  
  // Formula: Suggested selling price = cost per drink / (target pour cost % / 100)
  // Convert percentage to decimal: targetMargin / 100
  // Then divide cost per drink by that decimal
  return plateCost / (targetMargin / 100)
}


