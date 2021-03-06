Object.defineProperty(exports, "__esModule", { value: true });
exports.Expressions = {
    bq: /\\begin\{quotation\}/,
    claim: /\\begin\{claim\}/,
    corollary: /\\begin\{corollary\}/,
    definition: /\\begin\{definition\}/,
    endclaim: /\\end\{claim\}/,
    endcorallary: /\\end\{corallary\}/,
    enddefinition: /\\end\{definition\}/,
    endexample: /\\end\{example\}/,
    endproblem: /\\end\{problem\}/,
    endsolution: /\\end\{solution\}/,
    endtheorem: /\\end\{theorem\}/,
    eq: /\\end\{quotation\}/,
    example: /\\begin\{example\}/,
    problem: /\\begin\{problem\}/,
    proof: /\\begin\{proof\}/,
    qed: /\\end\{proof\}/,
    solution: /\\begin\{solution\}/,
    theorem: /\\begin\{theorem\}/,
};
exports.Functions = {
    bq: function () { return '<p class="quotation">'; },
    claim: function () { return '<h4>Claim</h4>'; },
    corollary: function () { return '<h4>Corollary</h4>'; },
    definition: function () { return '<h4>Definition</h4>'; },
    endclaim: function () { return ''; },
    endcorollary: function () { return ''; },
    enddefinition: function () { return ''; },
    endexample: function () { return ''; },
    endproblem: function () { return ''; },
    endsolution: function () { return ''; },
    endtheorem: function () { return ''; },
    eq: function () { return '</p>'; },
    example: function () { return '<h4>Example</h4>'; },
    problem: function () { return '<h4>Problem</h4>'; },
    proof: function () { return '<h4>Proof</h4>'; },
    qed: function () { return '$\\qed$'; },
    solution: function () { return '<h4>Solution</h4>'; },
    theorem: function () { return '<h4>Theorem</h4>'; },
};
exports.default = {
    Expressions: exports.Expressions,
    Functions: exports.Functions,
};
//# sourceMappingURL=headers.js.map