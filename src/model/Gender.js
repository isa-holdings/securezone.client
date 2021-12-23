// Using Object notation as an enum, why? 
// https://www.youtube.com/watch?v=JfcLkoBirZo
export const Gender = {
    Male: 'male',
    Female: 'female',
    Unknown: 'other'
};

export type Gender = typeof Gender[
    // 'Male', 'Female', 'Other'
    keyof typeof Gender
];


