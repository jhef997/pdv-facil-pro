// js/app.js - Motor Central do PDV Fácil Pro
const BancoLocal = {
  getProdutos: function() {
    const dados = localStorage.getItem('pdv_produtos');
    if (!dados) {
      const padrao = [
        { id: 1, nome: 'Frango Assado Especial', preco: 45.00, categoria: 'frangos' },
        { id: 2, nome: 'Batata Rústica (Porção)', preco: 20.00, categoria: 'acompanhamentos' },
        { id: 3, nome: 'Farofa Especial da Casa', preco: 10.00, categoria: 'acompanhamentos' },
        { id: 4, nome: 'Refrigerante 2 Litros', preco: 12.00, categoria: 'bebidas' }
      ];
      localStorage.setItem('pdv_produtos', JSON.stringify(padrao));
      return padrao;
    }
    return JSON.parse(dados);
  },

  getPedidos: function() {
    const dados = localStorage.getItem('pdv_pedidos');
    return dados ? JSON.parse(dados) : [];
  },

  salvarVenda: function(itens, total, formaPagamento, cliente) {
    const pedidos = this.getPedidos();
    const novoId = 'PED-' + Math.floor(1000 + Math.random() * 9000);
    const agora = new Date();
    const hora = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    const novoPedido = {
      id: novoId,
      itens,
      total,
      formaPagamento,
      cliente,
      status: 'preparando',
      hora
    };

    pedidos.unshift(novoPedido);
    localStorage.setItem('pdv_pedidos', JSON.stringify(pedidos));

    // Se for dinheiro, adiciona automaticamente no caixa
    if (formaPagamento === 'dinheiro') {
      this.adicionarMovimentoCaixa('entrada', `Venda Dinheiro (${novoId})`, total);
    }

    return novoPedido;
  },

  atualizarStatusPedido: function(id, status) {
    const pedidos = this.getPedidos();
    const pedido = pedidos.find(p => p.id === id);
    if (pedido) {
      pedido.status = status;
      localStorage.setItem('pdv_pedidos', JSON.stringify(pedidos));
    }
  },

  getCaixa: function() {
    const dados = localStorage.getItem('pdv_caixa');
    if (!dados) {
      const inicial = {
        aberto: false,
        fundoTroco: 0,
        movimentacoes: []
      };
      localStorage.setItem('pdv_caixa', JSON.stringify(inicial));
      return inicial;
    }
    return JSON.parse(dados);
  },

  abrirCaixaComContagem: function(fundoTrocoTotal, movimentacoesIniciais) {
    const caixa = {
      aberto: true,
      fundoTroco: fundoTrocoTotal,
      movimentacoes: movimentacoesIniciais
    };
    localStorage.setItem('pdv_caixa', JSON.stringify(caixa));
  },

  adicionarMovimentoCaixa: function(tipo, desc, valor) {
    const caixa = this.getCaixa();
    const agora = new Date();
    const hora = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    
    caixa.movimentacoes.push({ tipo, desc, valor, hora });
    localStorage.setItem('pdv_caixa', JSON.stringify(caixa));
  }
};
