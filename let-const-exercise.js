const PI = 3.14;

// - var can be redeclared, reassigned, it is function-scoped, and will be placed in the window, while let can be reassigned, but cannot be redeclared, it is block-scoped. and we don't need to worry about the window placement.
// - the description of var is above, but const cannot be redeclared, reassigned, it is block-scoped, and like let, we don't need to worry about the window placement.
// - let can be reassigned, when const won't be
// - hoisting is the way of JS compiler works, for example, with var we can access the variable even before it was declared because of hoisting.