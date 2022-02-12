"use strict";
const somarRenda = (...meses) => {
    return meses.reduce((rendaTotal, rendaAtual) => rendaTotal + rendaAtual, 0);
};
console.log(somarRenda(250, 720, 939, 1369, 2658, 3954, 4551, 6687));
//# sourceMappingURL=rest_parameters.js.map