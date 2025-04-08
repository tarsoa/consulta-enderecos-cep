//1 + 2 + 3 + ... + (n-2) + (n-1) + n
//async/await

function fatorial(n){
    return new Promise((resolve, reject) => {
        if (n >= 1){
            let ac = 1
            for(let i = 2; i <= n; i++)
                ac *= i
            resolve(ac)
        }
        else
            reject('Somente positivos')        
    })
}

// const chamadaComAsyncAwait function = async () => {
//     try{
//         const f1 = await fatorial(5)
//         console.log(err)
//     }
//     catch(err){
//         console.log(err)
//     }
//     try{
//         const f2 = await(fatorial(-1))
//         console.log(err)
//     }
//     const f1 = await fatorial(5)
//     console.log(f1)
//     const f2 = await(fatorial(-1))
// }
// chamadaComAsyncAwait
// async function fatorial(n){
//     let ac = 1
//     for(let i = 2; 1 <= n; i++)
//         ac *=i
//     return ac
// }





//const somaDemorada = (n) => {
//    const p = new Promise((resolve, reject) => {
//       if(n >= 1){
//        let ac = 0
//        for(let i = 1; i <= n; i++)
//            ac += i
//        resolve(ac)
//    }
//    else
//        reject('Somente valores positivos')
//    })
//    return p
//}
//
//const res = somaDemorada(10)
//then
//catch
//res
//   .then((soma) => console.log(`Soma: ${soma}`))
//   .catch((err) => console.log(`Erro: ${err}`))

//console.log('outras coisas...')








//const somaDemorada = (n) => {
//    let ac = 0
//    for(let i = 1; i<= n; i++)
//        ac += i
//    return ac
//}
//processamente bloqueante ousíncrono
//const res = somaDemorada(10)
//console.log(res)
//console.log('qualquer outra coisa que nao depende do res')
