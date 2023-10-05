const normalizeName = (name) => {
    // Convert to lowercase and remove non-alphabetic characters
    return name.toLowerCase().replace(/[^a-z]/g, "");
};

// Export the skillSorting function
export const skillSorting = (ordering) => {
    return (a, b) => {
        // Normalize skill names
        const normalizedA = normalizeName(a.nameEN);
        const normalizedB = normalizeName(b.nameEN);

        // Find the index of skills in the specified order using normalized names
        const indexA = ordering.findIndex(skill => normalizedA.includes(normalizeName(skill)));
        const indexB = ordering.findIndex(skill => normalizedB.includes(normalizeName(skill)));

        // If both skills are in the specified order, sort them according to that order
        if (indexA !== -1 && indexB !== -1) {
            return indexA - indexB;
        }

        // If one of the skills is in the specified order, it is placed first
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;

        // Other skills keep their original order
        return 0;
    };
};