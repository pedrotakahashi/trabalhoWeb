export default class Master{
    static instance = null;

    static getInstance(){
        if(this.instance === null)
        {
            return new Master();
        }
        else{
            return this.instance;
        }
    }

    constructor(){
        this.itensCarrinho = [];
        this.context = "Home";
    }

    setContext(context)
    {
        this.context = context;
    }

    getCurrentContext()
    {
        return this.context;
    }

    setItensCarrinho(array){
        this.itensCarrinho = array;
    }
    setItemCarrinho(item){
        this.itensCarrinho.push(item);
    }
    deleteItemCarrinho(id)
    {
        // nao foi escrito ainda
    }
}