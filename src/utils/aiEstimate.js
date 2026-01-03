/**
 * AI cost estimation function for bar/spirits ingredients
 * Estimates costs based on typical bar/restaurant wholesale pricing
 * Costs are in USD per fluid ounce (fl oz) for bar ingredients
 */
export const estimateIngredientCost = async (ingredientName) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Generate realistic-looking estimates based on ingredient name
  // In production, this would use actual AI/ML models or market data APIs
  const name = ingredientName.toLowerCase().trim()
  
  // Bar ingredient database with realistic costs per fluid ounce
  // Costs are in USD per fl oz, based on typical bar/restaurant wholesale pricing
  const ingredientDatabase = {
    // Premium Spirits (top shelf)
    'dom perignon': { base: 8.00, variance: 2.00 },
    'cristal': { base: 10.00, variance: 3.00 },
    'macallan': { base: 4.50, variance: 1.50 },
    'johnnie walker blue': { base: 5.00, variance: 1.50 },
    'patron': { base: 2.50, variance: 0.75 },
    'don julio': { base: 2.75, variance: 0.75 },
    'grey goose': { base: 1.80, variance: 0.50 },
    'belvedere': { base: 1.75, variance: 0.50 },
    'hendricks': { base: 1.60, variance: 0.40 },
    'tanqueray': { base: 1.20, variance: 0.30 },
    
    // Standard Spirits (well/mid-shelf)
    'vodka': { base: 0.50, variance: 0.25 },
    'gin': { base: 0.55, variance: 0.25 },
    'rum': { base: 0.50, variance: 0.25 },
    'whiskey': { base: 0.75, variance: 0.35 },
    'whisky': { base: 0.75, variance: 0.35 },
    'bourbon': { base: 0.80, variance: 0.35 },
    'scotch': { base: 1.20, variance: 0.50 },
    'tequila': { base: 0.70, variance: 0.30 },
    'brandy': { base: 0.65, variance: 0.30 },
    'cognac': { base: 1.50, variance: 0.75 },
    
    // Specific brands (well/mid)
    'smirnoff': { base: 0.45, variance: 0.20 },
    'absolut': { base: 0.60, variance: 0.25 },
    'tito': { base: 0.70, variance: 0.25 },
    'bombay': { base: 0.75, variance: 0.30 },
    'bacardi': { base: 0.40, variance: 0.20 },
    'captain morgan': { base: 0.45, variance: 0.20 },
    'jim beam': { base: 0.50, variance: 0.25 },
    'jack daniels': { base: 0.65, variance: 0.30 },
    'jose cuervo': { base: 0.55, variance: 0.25 },
    '1800': { base: 0.60, variance: 0.25 },
    
    // Liqueurs & Cordials
    'triple sec': { base: 0.30, variance: 0.15 },
    'cointreau': { base: 0.75, variance: 0.25 },
    'grand marnier': { base: 1.20, variance: 0.40 },
    'baileys': { base: 0.60, variance: 0.25 },
    'kahlua': { base: 0.50, variance: 0.20 },
    'amaretto': { base: 0.45, variance: 0.20 },
    'frangelico': { base: 0.70, variance: 0.30 },
    'chambord': { base: 1.00, variance: 0.40 },
    'st germain': { base: 0.80, variance: 0.30 },
    'aperol': { base: 0.55, variance: 0.25 },
    'campari': { base: 0.50, variance: 0.25 },
    'vermouth': { base: 0.35, variance: 0.15 },
    'chartreuse': { base: 1.10, variance: 0.40 },
    
    // Mixers & Juices
    'orange juice': { base: 0.12, variance: 0.05 },
    'cranberry juice': { base: 0.10, variance: 0.04 },
    'pineapple juice': { base: 0.11, variance: 0.05 },
    'grapefruit juice': { base: 0.12, variance: 0.05 },
    'lime juice': { base: 0.15, variance: 0.06 },
    'lemon juice': { base: 0.15, variance: 0.06 },
    'simple syrup': { base: 0.05, variance: 0.02 },
    'grenadine': { base: 0.08, variance: 0.03 },
    'soda': { base: 0.08, variance: 0.03 },
    'tonic': { base: 0.10, variance: 0.04 },
    'club soda': { base: 0.06, variance: 0.02 },
    'ginger beer': { base: 0.12, variance: 0.05 },
    'cola': { base: 0.08, variance: 0.03 },
    
    // Bitters & Modifiers
    'angostura': { base: 0.50, variance: 0.20 },
    'bitters': { base: 0.45, variance: 0.20 },
    'orange bitters': { base: 0.50, variance: 0.20 },
    'peychaud': { base: 0.50, variance: 0.20 },
    
    // Wine & Champagne
    'champagne': { base: 2.50, variance: 1.00 },
    'prosecco': { base: 1.20, variance: 0.50 },
    'wine': { base: 0.80, variance: 0.40 },
    'red wine': { base: 0.85, variance: 0.40 },
    'white wine': { base: 0.80, variance: 0.40 },
    
    // Beer (per fl oz)
    'beer': { base: 0.15, variance: 0.08 },
    'ipa': { base: 0.20, variance: 0.10 },
    'stout': { base: 0.18, variance: 0.09 },
    
    // Garnishes & Fresh Ingredients
    'lime': { base: 0.10, variance: 0.05 },
    'lemon': { base: 0.10, variance: 0.05 },
    'orange': { base: 0.08, variance: 0.04 },
    'mint': { base: 0.15, variance: 0.08 },
    'cherry': { base: 0.12, variance: 0.06 },
    'olive': { base: 0.10, variance: 0.05 },
    
    // Cream & Dairy
    'cream': { base: 0.20, variance: 0.10 },
    'heavy cream': { base: 0.25, variance: 0.12 },
    'coconut cream': { base: 0.18, variance: 0.08 },
    
    // Other
    'egg white': { base: 0.15, variance: 0.08 },
    'honey': { base: 0.30, variance: 0.15 },
    'agave': { base: 0.25, variance: 0.12 },
  }
  
  // Find matching ingredient
  let match = null
  let baseCost = 0.50 // Default fallback for unknown spirits ($0.50/fl oz)
  let variance = 0.20
  
  // Check for exact matches first
  for (const [key, value] of Object.entries(ingredientDatabase)) {
    if (name === key || name.includes(key)) {
      match = value
      baseCost = value.base
      variance = value.variance
      break
    }
  }
  
  // If no match found, try partial matching with common words
  if (!match) {
    const commonWords = ['vodka', 'gin', 'rum', 'whiskey', 'tequila', 'juice', 'syrup', 'bitters', 
                         'liqueur', 'cordial', 'soda', 'tonic', 'wine', 'champagne', 'beer']
    for (const word of commonWords) {
      if (name.includes(word)) {
        const found = ingredientDatabase[word]
        if (found) {
          baseCost = found.base
          variance = found.variance
          break
        }
      }
    }
  }
  
  // Apply premium multiplier if mentioned
  if (name.includes('premium') || name.includes('top shelf') || name.includes('reserve') || 
      name.includes('single malt') || name.includes('aged')) {
    baseCost *= 1.5
    variance *= 1.2
  }
  
  // Apply well/cheap multiplier if mentioned
  if (name.includes('well') || name.includes('house') || name.includes('rail')) {
    baseCost *= 0.7
    variance *= 0.8
  }
  
  // Ensure minimum values to avoid $0.00
  baseCost = Math.max(baseCost, 0.05)
  // Ensure variance is at least 20% of base cost to create a visible range
  variance = Math.max(variance, baseCost * 0.2)
  
  // Calculate estimates
  const perUnitCost = baseCost
  let minCost = Math.max(0.05, baseCost - variance)
  let maxCost = baseCost + variance
  
  // Ensure range is visible (at least $0.05 difference for display)
  if (maxCost - minCost < 0.05) {
    const center = (minCost + maxCost) / 2
    minCost = Math.max(0.05, center - 0.10)
    maxCost = center + 0.10
  }
  
  return {
    perUnitCost: perUnitCost,
    minCost: minCost,
    maxCost: maxCost,
    unit: 'fl oz', // Default unit for bar ingredients
    confidence: match ? 0.80 : 0.60, // Higher confidence for matched ingredients
    source: 'Bar Market Estimate'
  }
}

