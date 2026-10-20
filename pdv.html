<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PDV Fácil Pro - Frente de Caixa</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --bg-app: #f8fafc; --bg-surface: #ffffff; --bg-sidebar: #0f172a; --bg-sidebar-hover: #1e293b;
      --border-color: #e2e8f0; --primary: #2563eb; --primary-hover: #1d4ed8; --primary-light: #eff6ff;
      --success: #16a34a; --success-bg: #dcfce7; --warning: #d97706; --danger: #dc2626; --danger-bg: #fee2e2;
      --text-main: #0f172a; --text-muted: #64748b; --text-white: #ffffff;
      --radius-sm: 6px; --radius-md: 10px; --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
      --font-family: 'Inter', system-ui, -apple-system, sans-serif;
    }
    body { font-family: var(--font-family); background-color: var(--bg-app); color: var(--text-main); height: 100vh; overflow: hidden; display: flex; }
    .app-container { display: flex; width: 100vw; height: 100vh; }

    /* SIDEBAR */
    .sidebar { width: 240px; background-color: var(--bg-sidebar); color: var(--text-white); display: flex; flex-direction: column; justify-content: space-between; border-right: 1px solid #1e293b; }
    .brand { padding: 20px 16px; font-size: 1.15rem; font-weight: 700; border-bottom: 1px solid var(--bg-sidebar-hover); display: flex; align-items: center; gap: 10px; letter-spacing: -0.5px; }
    .brand-badge { background-color: var(--primary); font-size: 0.65rem; padding: 3px 8px; border-radius: 4px; text-transform: uppercase; font-weight: 800; }
    .nav-menu { list-style: none; padding: 16px 10px; display: flex; flex-direction: column; gap: 6px; }
    .nav-item a { display: flex; align-items: center; gap: 12px; padding: 11px 14px; color: #94a3b8; text-decoration: none; font-size: 0.9rem; font-weight: 500; border-radius: var(--radius-sm); transition: all 0.2s; }
    .nav-item a svg { width: 18px; height: 18px; fill: currentColor; }
    .nav-item a:hover, .nav-item.active a { background-color: var(--bg-sidebar-hover); color: var(--text-white); }
    .nav-item.active a { background-color: var(--primary); color: white; font-weight: 600; }
    .system-status { padding: 16px; border-top: 1px solid var(--bg-sidebar-hover); font-size: 0.75rem; color: #94a3b8; display: flex; align-items: center; gap: 8px; }

    /* CONTEÚDO PRINCIPAL */
    .main-content { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
    .topbar { height: 60px; background-color: var(--bg-surface); border-bottom: 1px solid var(--border-color); display: flex; align-items: center; justify-content: space-between; padding: 0 24px; box-shadow: var(--shadow-sm); }
    
    .pdv-grid { display: grid; grid-template-columns: 1fr 420px; flex: 1; overflow: hidden; }
    @media (max-width: 1024px) { .pdv-grid { grid-template-columns: 1fr; } }

    /* PRODUTOS */
    .products-panel { padding: 24px; overflow-y: auto; display: flex; flex-direction: column; gap: 20px; }
    .search-wrapper { position: relative; width: 100%; }
    .search-wrapper svg { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); width: 20px; height: 20px; fill: var(--text-muted); }
    .search-box { width: 100%; padding: 12px 16px 12px 46px; border: 1px solid var(--border-color); border-radius: var(--radius-md); font-size: 0.95rem; outline: none; background: white; }

    .produtos-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; }
    .produto-card-pdv { background: #ffffff; border: 1px solid var(--border-color); padding: 18px; border-radius: var(--radius-md); cursor: pointer; text-align: left; box-shadow: var(--shadow-sm); transition: all 0.2s ease; display: flex; flex-direction: column; justify-content: space-between; gap: 8px; }
    .produto-card-pdv:hover { border-color: var(--primary); transform: translateY(-2px); }
    .stock-badge { font-size: 0.75rem; color: var(--text-muted); }
    .stock-badge.low { color: var(--danger); font-weight: bold; }

    /* CARRINHO */
    .cart-panel { background: var(--bg-surface); border-left: 1px solid var(--border-color); display: flex; flex-direction: column; justify-content: space-between; padding: 20px; }
    .cart-header { font-size: 1.05rem; font-weight: 700; border-bottom: 1px solid var(--border-color); padding-bottom: 12px; display: flex; justify-content: space-between; align-items: center; }
    .cart-items-list { flex: 1; overflow-y: auto; margin: 12px 0; display: flex; flex-direction: column; gap: 8px; }
    .cart-item-row { display: flex; justify-content: space-between; align-items: center; padding: 12px; background: #f8fafc; border-radius: var(--radius-sm); font-size: 0.875rem; border: 1px solid var(--border-color); }
    
    .cart-footer { border-top: 1px solid var(--border-color); padding-top: 16px; display: flex; flex-direction: column; gap: 10px; }
    .summary-line { display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--text-muted); }
    .total-row { display: flex; justify-content: space-between; align-items: center; font-size: 1.3rem; font-weight: 800; }
    .total-val { color: var(--success); }

    .btn-checkout { width: 100%; padding: 14px; background-color: var(--success); color: white; border: none; border-radius: var(--radius-md); font-size: 1rem; font-weight: 800; cursor: pointer; text-transform: uppercase; display: flex; align-items: center; justify-content: center; gap: 8px; }
    .btn-discount { padding: 8px 12px; background-color: var(--primary-light); color: var(--primary); border: 1px dashed var(--primary); border-radius: var(--radius-sm); font-weight: 700; font-size: 0.8rem; cursor: pointer; text-align: center; }

    /* MODAL DE CHECKOUT & CALCULADORA DE TROCO */
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(15, 23, 42, 0.7); display: flex; align-items: center; justify-content: center; z-index: 999; }
    .modal-card { background: white; width: 480px; max-width: 95vw; border-radius: 12px; padding: 24px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); display: flex; flex-direction: column; gap: 16px; }
    .calc-row { display: flex; flex-direction: column; gap: 6px; }
    .calc-row label { font-size: 0.85rem; font-weight: 600; color: var(--text-muted); }
    .calc-row input, .calc-row select { padding: 12px; border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-size: 1.1rem; font-weight: 700; outline: none; }
    .troco-box { background: var(--success-bg); color: var(--success); padding: 16px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; font-size: 1.2rem; font-weight: 800; }

    /* CUPOM TÉRMICO DE IMPRESSÃO */
    #cupom-impressao { display: none; }
    @media print {
      body * { visibility: hidden; }
      #cupom-impressao, #cupom-impressao * { visibility: visible; }
      #cupom-impressao { display: block; position: absolute; left: 0; top: 0; width: 80mm; font-family: monospace; font-size: 12px; color: black; padding: 10px; }
      .cupom-header { text-align: center; border-bottom: 1px dashed #000; padding-bottom: 8px; margin-bottom: 8px; }
      .cupom-item { display: flex; justify-content: space-between; margin-bottom: 4px; }
      .cupom-total { border-top: 1px dashed #000; margin-top: 8px; padding-top: 8px; font-weight: bold; }
    }
  </style>
</head>
<body>

  <div class="app-container">
    <!-- SIDEBAR -->
    <aside class="sidebar">
      <div>
        <div class="brand">
          <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.02-.42 1.95-1.07 2.75z"/></svg>
          <span>PDV FÁCIL</span>
          <span class="brand-badge">PRO</span>
        </div>
        <ul class="nav-menu">
          <li class="nav-item"><a href="index.html"><svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg> Painel Inicial</a></li>
          <li class="nav-item active"><a href="pdv.html"><svg viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg> Frente de Caixa</a></li>
          <li class="nav-item"><a href="pedidos.html"><svg viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg> Pedidos</a></li>
          <li class="nav-item"><a href="produtos.html"><svg viewBox="0 0 24 24"><path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"/></svg> Produtos</a></li>
          <li class="nav-item"><a href="caixa.html"><svg viewBox="0 0 24 24"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg> Caixa</a></li>
          <li class="nav-item"><a href="relatorios.html"><svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg> Relatórios</a></li>
        </ul>
      </div>
      <div class="system-status">Caixa #01 &bull; v1.3.0</div>
    </aside>

    <!-- CONTEÚDO PRINCIPAL -->
    <main class="main-content">
      <header class="topbar">
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="background: var(--success-bg); color: var(--success); padding: 5px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 700;">&bull; CAIXA ABERTO</span>
          <span style="font-size: 0.85rem; color: var(--text-muted);">Operador: <strong>Jefferson Nobre</strong></span>
        </div>
        <div style="font-size: 0.8rem; color: var(--text-muted);">
          [F1] Buscar | [F2] Pagar | [F4] Desconto | [ESC] Limpar
        </div>
      </header>

      <div class="pdv-grid">
        <!-- PAINEL DE PRODUTOS -->
        <section class="products-panel">
          <div class="search-wrapper">
            <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            <input type="text" id="input-busca" class="search-box" placeholder="Pesquisar produto... [F1]" onkeyup="filtrarProdutos()">
          </div>
          
          <div class="produtos-grid" id="grid-produtos"></div>
        </section>

        <!-- CARRINHO -->
        <section class="cart-panel">
          <div>
            <div class="cart-header">
              <span>Comanda Atual</span>
              <button onclick="limparComanda()" style="background: none; border: none; color: var(--danger); font-size: 0.8rem; font-weight: bold; cursor: pointer;">Limpar [ESC]</button>
            </div>
            
            <div class="cart-items-list" id="lista-carrinho">
              <div style="color: var(--text-muted); text-align: center; margin-top: 60px; font-size: 0.9rem;">
                Nenhum item adicionado.<br>Clique nos produtos ao lado.
              </div>
            </div>
          </div>

          <div class="cart-footer">
            <button class="btn-discount" onclick="aplicarDescontoPrompt()">+ Conceder Desconto (R$) [F4]</button>

            <div class="summary-line">
              <span>Subtotal:</span>
              <span id="span-subtotal">R$ 0,00</span>
            </div>
            <div class="summary-line" style="color: var(--danger);">
              <span>Desconto:</span>
              <span id="span-desconto">- R$ 0,00</span>
            </div>

            <div class="total-row">
              <span>Total a Pagar:</span>
              <span class="total-val" id="span-total">R$ 0,00</span>
            </div>

            <button class="btn-checkout" onclick="abrirModalPagamento()">Finalizar Venda [F2]</button>
          </div>
        </section>
      </div>
    </main>
  </div>

  <!-- MODAL DE CHECKOUT & CALCULADORA DE TROCO -->
  <div id="modal-checkout" class="modal-overlay" style="display: none;">
    <div class="modal-card">
      <h2>Pagamento & Finalização</h2>
      
      <div class="calc-row">
        <label>Forma de Pagamento:</label>
        <select id="modal-forma-pagamento" onchange="alternarCampoTroco()">
          <option value="dinheiro">Dinheiro</option>
          <option value="pix">PIX</option>
          <option value="cartao">Cartão Débito / Crédito</option>
        </select>
      </div>

      <div class="calc-row" id="group-valor-recebido">
        <label>Valor Entregue pelo Cliente (R$):</label>
        <input type="number" step="0.01" id="input-valor-recebido" placeholder="0,00" oninput="calcularTrocoVisual()">
      </div>

      <div class="troco-box" id="box-troco">
        <span>Troco a Devolver:</span>
        <span id="span-troco-val">R$ 0,00</span>
      </div>

      <div class="calc-row">
        <label>Nome / Identificação do Cliente (Opcional):</label>
        <input type="text" id="input-nome-cliente" placeholder="Ex: João da Silva">
      </div>

      <div style="display: flex; gap: 10px; margin-top: 10px;">
        <button onclick="fecharModalPagamento()" style="flex: 1; padding: 12px; background: #e2e8f0; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">Cancelar</button>
        <button onclick="confirmarVendaEImprimir()" style="flex: 2; padding: 12px; background: var(--success); color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">Confirmar & Imprimir Cupom</button>
      </div>
    </div>
  </div>

  <!-- CONTAINER DE IMPRESSÃO DO CUPOM TÉRMICO -->
  <div id="cupom-impressao"></div>

  <script src="js/app.js"></script>
  <script>
    let comanda = [];
    let valorDesconto = 0;

    function carregarProdutosPDV() {
      const container = document.getElementById('grid-produtos');
      if (!container) return;
      const produtos = BancoLocal.getProdutos();
      container.innerHTML = '';

      produtos.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'produto-card-pdv';
        const estoqueText = prod.estoque !== undefined ? `Estoque: ${prod.estoque}` : 'Em estoque';
        const estoqueClass = (prod.estoque !== undefined && prod.estoque <= 5) ? 'stock-badge low' : 'stock-badge';

        card.innerHTML = `
          <div>
            <strong style="font-size: 0.95rem;">${prod.nome}</strong><br>
            <span class="${estoqueClass}">${estoqueText}</span>
          </div>
          <span style="color: var(--success); font-weight: 800; font-size: 1.1rem;">R$ ${prod.preco.toFixed(2).replace('.', ',')}</span>
        `;
        card.onclick = () => adicionarAoCarrinho(prod);
        container.appendChild(card);
      });
    }

    function adicionarAoCarrinho(produto) {
      if (produto.estoque !== undefined && produto.estoque <= 0) {
        alert("Produto sem estoque disponível!");
        return;
      }

      const itemExistente = comanda.find(item => item.id === produto.id);
      if (itemExistente) {
        if (produto.estoque !== undefined && itemExistente.qtd + 1 > produto.estoque) {
          alert("Quantidade excede o estoque disponível!");
          return;
        }
        itemExistente.qtd += 1;
      } else {
        comanda.push({ id: produto.id, nome: produto.nome, preco: produto.preco, qtd: 1 });
      }
      atualizarCarrinhoVisual();
    }

    function alterarQtd(id, delta) {
      const item = comanda.find(i => i.id === id);
      if (item) {
        item.qtd += delta;
        if (item.qtd <= 0) comanda = comanda.filter(i => i.id !== id);
      }
      atualizarCarrinhoVisual();
    }

    function atualizarCarrinhoVisual() {
      const lista = document.getElementById('lista-carrinho');
      if (!lista) return;

      if (comanda.length === 0) {
        lista.innerHTML = '<div style="color: var(--text-muted); text-align: center; margin-top: 60px; font-size: 0.9rem;">Nenhum item adicionado.<br>Clique nos produtos ao lado.</div>';
        valorDesconto = 0;
        renderizarTotais(0, 0);
        return;
      }

      lista.innerHTML = '';
      let subtotal = 0;

      comanda.forEach(item => {
        subtotal += item.preco * item.qtd;
        const row = document.createElement('div');
        row.className = 'cart-item-row';
        row.innerHTML = `
          <div style="flex: 1;">
            <strong>${item.nome}</strong><br>
            <span style="font-size: 0.75rem; color: var(--text-muted);">R$ ${item.preco.toFixed(2).replace('.', ',')} un</span>
          </div>
          <div style="display: flex; align-items: center; gap: 6px;">
            <button onclick="alterarQtd(${item.id}, -1)" style="padding: 2px 8px; background: #e2e8f0; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">-</button>
            <span style="font-weight: 700; min-width: 18px; text-align: center;">${item.qtd}</span>
            <button onclick="alterarQtd(${item.id}, 1)" style="padding: 2px 8px; background: #e2e8f0; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">+</button>
          </div>
        `;
        lista.appendChild(row);
      });

      renderizarTotais(subtotal, valorDesconto);
    }

    function renderizarTotais(subtotal, desconto) {
      const totalFinal = Math.max(0, subtotal - desconto);
      document.getElementById('span-subtotal').innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
      document.getElementById('span-desconto').innerText = `- R$ ${desconto.toFixed(2).replace('.', ',')}`;
      document.getElementById('span-total').innerText = `R$ ${totalFinal.toFixed(2).replace('.', ',')}`;
    }

    function aplicarDescontoPrompt() {
      if (comanda.length === 0) return;
      const valStr = prompt("Digite o valor do desconto (R$):");
      if (!valStr) return;
      const desc = parseFloat(valStr.replace(',', '.'));
      if (isNaN(desc) || desc < 0) { alert("Valor de desconto inválido!"); return; }
      
      valorDesconto = desc;
      atualizarCarrinhoVisual();
    }

    function abrirModalPagamento() {
      if (comanda.length === 0) { alert("A comanda está vazia!"); return; }
      document.getElementById('modal-checkout').style.display = 'flex';
      alternarCampoTroco();
    }

    function fecharModalPagamento() {
      document.getElementById('modal-checkout').style.display = 'none';
    }

    function alternarCampoTroco() {
      const forma = document.getElementById('modal-forma-pagamento').value;
      const groupTroco = document.getElementById('group-valor-recebido');
      const boxTroco = document.getElementById('box-troco');

      if (forma === 'dinheiro') {
        groupTroco.style.display = 'flex';
        boxTroco.style.display = 'flex';
        calcularTrocoVisual();
      } else {
        groupTroco.style.display = 'none';
        boxTroco.style.display = 'none';
      }
    }

    function calcularTrocoVisual() {
      const subtotal = comanda.reduce((acc, i) => acc + (i.preco * i.qtd), 0);
      const totalFinal = Math.max(0, subtotal - valorDesconto);
      const valorRecebido = parseFloat(document.getElementById('input-valor-recebido').value) || 0;
      const troco = Math.max(0, valorRecebido - totalFinal);

      document.getElementById('span-troco-val').innerText = `R$ ${troco.toFixed(2).replace('.', ',')}`;
    }

    function confirmarVendaEImprimir() {
      const subtotal = comanda.reduce((acc, i) => acc + (i.preco * i.qtd), 0);
      const totalFinal = Math.max(0, subtotal - valorDesconto);
      const formaPagamento = document.getElementById('modal-forma-pagamento').value;
      const valorRecebido = parseFloat(document.getElementById('input-valor-recebido').value) || totalFinal;
      const troco = Math.max(0, valorRecebido - totalFinal);
      const cliente = document.getElementById('input-nome-cliente').value || "Consumidor Final";

      if (formaPagamento === 'dinheiro' && valorRecebido < totalFinal) {
        alert("O valor recebido é menor que o total da venda!");
        return;
      }

      // Grava no banco local centralizado
      const pedido = BancoLocal.salvarVenda(comanda, subtotal, valorDesconto, totalFinal, formaPagamento, valorRecebido, troco, cliente);

      // Gera e imprime cupom não fiscal
      gerarCupomNaoFiscal(pedido);
      
      fecharModalPagamento();
      limparComanda();
      carregarProdutosPDV(); // Atualiza a tela com o estoque abatido
      
      window.print(); // Dispara o diálogo de impressão do navegador / impressora térmica
    }

    function gerarCupomNaoFiscal(pedido) {
      const container = document.getElementById('cupom-impressao');
      let itensHtml = '';

      pedido.itens.forEach(item => {
        itensHtml += `
          <div class="cupom-item">
            <span>${item.qtd}x ${item.nome}</span>
            <span>R$ ${(item.preco * item.qtd).toFixed(2)}</span>
          </div>
        `;
      });

      container.innerHTML = `
        <div class="cupom-header">
          <strong>PDV FÁCIL PRO</strong><br>
          Comprovante Não Fiscal<br>
          ${pedido.data} ${pedido.hora} - ${pedido.id}
        </div>
        <div><strong>Cliente:</strong> ${pedido.cliente}</div>
        <hr style="border: 0.5px dashed #000; margin: 6px 0;">
        ${itensHtml}
        <div class="cupom-total">
          <div class="cupom-item"><span>Subtotal:</span><span>R$ ${pedido.subtotal.toFixed(2)}</span></div>
          <div class="cupom-item"><span>Desconto:</span><span>R$ ${pedido.desconto.toFixed(2)}</span></div>
          <div class="cupom-item" style="font-size: 14px;"><span>TOTAL:</span><span>R$ ${pedido.total.toFixed(2)}</span></div>
          <div class="cupom-item"><span>Forma Pgto:</span><span style="text-transform:uppercase;">${pedido.formaPagamento}</span></div>
          ${pedido.formaPagamento === 'dinheiro' ? `<div class="cupom-item"><span>Troco:</span><span>R$ ${pedido.troco.toFixed(2)}</span></div>` : ''}
        </div>
        <div style="text-align: center; margin-top: 12px; font-size: 10px;">
          Obrigado pela preferência!
        </div>
      `;
    }

    function limparComanda() {
      comanda = [];
      valorDesconto = 0;
      atualizarCarrinhoVisual();
    }

    function filtrarProdutos() {
      const termo = document.getElementById('input-busca').value.toLowerCase();
      document.querySelectorAll('.produto-card-pdv').forEach(card => {
        const nome = card.querySelector('strong').innerText.toLowerCase();
        card.style.display = nome.includes(termo) ? 'flex' : 'none';
      });
    }

    // Atalhos do Teclado Profissionais
    document.addEventListener('keydown', e => {
      if (e.key === 'F1') {
        e.preventDefault();
        document.getElementById('input-busca').focus();
      } else if (e.key === 'F2') {
        e.preventDefault();
        abrirModalPagamento();
      } else if (e.key === 'F4') {
        e.preventDefault();
        aplicarDescontoPrompt();
      } else if (e.key === 'Escape') {
        fecharModalPagamento();
        limparComanda();
      }
    });

    document.addEventListener('DOMContentLoaded', () => {
      carregarProdutosPDV();
    });
  </script>
</body>
</html>
