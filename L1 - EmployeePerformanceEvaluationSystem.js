function evaluateEmployees(employees) {
  return employees
    .filter(e => e.tasksCompleted > 5)
    .map(e => {
      let performance =
        e.rating > 4.5 ? "Excellent" :
        e.rating >= 3 && e.rating <= 4.5 ? "Good" :
        "Needs Improvement";
      return { name: e.name, performance };
    })
    .sort((a, b) => {
      const order = { "Excellent": 1, "Good": 2, "Needs Improvement": 3 };
      return order[a.performance] - order[b.performance];
    });
}
