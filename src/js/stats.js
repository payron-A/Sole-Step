// Small pure functions that turn real app data (products/customers)
// into the numbers the Dashboard and Analytics pages display.

export function getRevenue(customers){
    return customers.reduce((sum,c)=> sum + (+c.totalSpent || 0), 0);
}

export function getOrderCount(customers){
    return customers.reduce((sum,c)=> sum + (+c.orders || 0), 0);
}

export function getBestSelling(products, count = 4){
    return [...products]
        .sort((a,b)=> (+b.stars || 0) - (+a.stars || 0) || (+a.stock||0) - (+b.stock||0))
        .slice(0,count);
}

// Groups products by their `type` field and returns each group's
// share of the total catalog, sorted from most to least common.
export function getTypeBreakdown(products){
    const counts = {};
    products.forEach(p => {
        const key = p.type || "other";
        counts[key] = (counts[key] || 0) + 1;
    });
    const total = products.length || 1;
    return Object.entries(counts)
        .map(([type,count]) => ({ type, count, percent: Math.round((count/total)*100) }))
        .sort((a,b)=> b.count - a.count);
}
