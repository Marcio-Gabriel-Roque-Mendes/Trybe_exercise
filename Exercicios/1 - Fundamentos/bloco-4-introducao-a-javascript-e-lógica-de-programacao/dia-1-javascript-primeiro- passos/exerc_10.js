const custo = 23
const valVenda = 91
let lucroBruto = valVenda-custo
let imposto = (20/100)
let deducao = lucroBruto * imposto 
let lucroLiquido = lucroBruto - deducao
let lucroMilUnid = 1000 * lucroLiquido

if (custo == 0 || valVenda == 0) {
  console.log('!ERRO');
} else {
  console.log(`O lucro da empresa ao vender 1000 unidades do produto foi de R$ ${lucroMilUnid}`);  
}





