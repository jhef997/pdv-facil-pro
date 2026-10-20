<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PDV Fácil Pro - Controle de Caixa</title>
  <style>
    /* ==========================================================================
       PDV FÁCIL PRO - CONTROLE DE CAIXA E MOVIMENTAÇÕES
       ========================================================================== */
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    :root {
      --bg-app: #f1f5f9;
      --bg-surface: #ffffff;
      --bg-sidebar: #0f172a;
      --bg-sidebar-hover: #1e293b;
      --border-color: #cbd5e1;

      --primary: #2563eb;
      --primary-hover: #1d4ed8;
      --primary-light: #eff6ff;

      --success: #15803d;
      --success-bg: #dcfce7;
      --warning: #d97706;
      --warning-bg: #fef3c7;
      --danger: #b91c1c;
      --danger-bg: #fee2e2;

      --text-main: #0f172a;
      --text-muted: #64748b;
      --text-white: #ffffff;

      --radius-sm: 6px;
      --radius-md: 8px;
      --radius-lg: 12px;

      --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      --font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }

    body {
      font-family: var(--font-family);
      background-color: var(--bg-app);
      color: var(--text-main);
      height: 100vh;
      overflow: hidden;
      display: flex;
    }

    .app-container {
      display: flex;
      width: 100vw;
      height: 100vh;
    }

    /* SIDEBAR */
    .sidebar {
      width: 220px;
      background-color: var(--bg-sidebar);
      color: var(--text-white);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .brand {
      padding: 18px 16px;
      font-size: 1.1rem;
      font-weight: 700;
      border-bottom: 1px solid var(--bg-sidebar-hover);
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .brand-badge {
      background-color: var(--primary);
      font-size: 0.65rem;
      padding: 2px 6px;
      border-radius: 4px;
      text-transform: uppercase;
    }

    .nav-menu {
      list-style: none;
      padding: 12px 8px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .nav-item a {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 12px;
      color: #94a3b8;
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 500;
      border-radius: var(--radius-sm);
    }

    .nav-item a:hover, .nav-item.active a {
      background-color: var(--bg-sidebar-hover);
      color: var(--text-white);
    }

    .nav-item.active a {
      border-left: 3px solid var(--primary);
    }

    .system-status {
      padding: 12px 16px;
      border-top: 1px solid var(--bg-sidebar-hover);
      font-size: 0.75rem;
      color: #94a3b8;
    }

    /* CONTEÚDO PRINCIPAL */
    .main-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
    }

    .topbar {
      height: 56px;
      background-color: var(--bg-surface);
      border-bottom: 1px solid var(--border-color);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
    }

    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
    }

    .status-badge.open {
      background-color: var(--success-bg);
      color: var(--success);
    }

    .caixa-container {
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
    }

    /* METRICAS DE CAIXA */
    .kpi-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
    }

    .kpi-card {
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      padding: 18px;
      box-shadow: var(--shadow-sm);
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .kpi-title { font-size: 0.8rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; }
    .kpi-val { font-size: 1.5rem; font-weight: 800; }
    .kpi-val.green { color: var(--success); }
    .kpi-val.red { color: var(--danger); }

    /* BOTÕES DE AÇÃO */
    .actions-row {
      display: flex;
      gap: 12px;
    }

    .btn-action {
      padding: 10px 18px;
      border-radius: var(--radius-md);
      font-weight: 700;
      font-size: 0.875rem;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .btn-sangria { background-color: var(--danger-bg); color: var(--danger); }
    .btn-sangria:hover { background-color: #fca5a5; }

    .btn-suprimento { background-color: var(--success-bg); color: var(--success); }
    .btn-suprimento:hover { background-color: #86efac; }

    /* TABELA DE MOVIMENTAÇÕES */
    .table-card {
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-sm);
      overflow: hidden;
    }

    .table-header {
      padding: 16px 20px;
      border-bottom: 1px solid var(--border-color);
      font-weight: 700;
      font-size: 0.95rem;
    }

    .mov-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.875rem;
    }

    .mov-table th {
      background-color: #f8fafc;
      padding: 12px 16px;
      text-align: left;
      color: var(--text-muted);
      font-weight: 600;
      border-bottom: 1px solid var(--border-color);
    }

    .mov-table td {
      padding: 12px 16px;
      border-bottom: 1px solid #f1f5f9;
    }

    .badge-tipo {
      padding: 3px 8px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 700;
    }

    .badge-tipo.entrada { background-color: var(--success-bg); color: var(--success); }
    .badge-tipo.saida { background-color: var(--danger-bg); color: var(--danger); }
    .badge-tipo.inicial { background-color: var(--primary-light); color: var(--primary); }
  </style>
</head>
<body>

  <div class="app-container">
    <!-- MENU LATERAL -->
    <aside class="sidebar">
      <div>
        <div class="brand">
          <span>PDV FÁCIL</span>
          <span class="brand-badge">PRO</span>
        </div>
        <ul class="nav-menu">
          <li class="nav-item"><a href="index.html"><span class="nav-text">Painel Inicial</span></a></li>
          <li class="nav-item"><a href="pdv.html"><span class="nav-text">Frente de Caixa</span></a></li>
          <li class="nav-item"><a href="pedidos.html"><span class="nav-text">Pedidos</span></a></li>
          <li class="nav-item"><a href="produtos.html"><span class="nav-text">Produtos</span></a></li>
          <li class="nav-item active"><a href="caixa.html"><span class="nav-text">Caixa</span></a></li>
          <li class="nav-item"><a href="relatorios.html"><span class="nav-text">Relatórios</span></a></li>
        </ul>
      </div>
      <div class="system-status">
        Caixa #01 &bull; v1.2.0
      </div>
    </aside>

    <!-- CONTEÚDO PRINCIPAL -->
    <main class="main-content">
      <header class="topbar">
        <div style="display: flex; align-items: center; gap: 12px;">
          <span class="status-badge open">&bull; CAIXA ABERTO</span>
          <span style="font-size: 0.85rem; color: var(--text-muted);">Operador: <strong>Jefferson Nobre</strong></span>
        </div>
        <button style="padding: 6px 12px; background: var(--danger); color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;" onclick="alert('Deseja realmente fechar o caixa?')">
          Fechar Caixa
        </button>
      </header>

      <div class="caixa-container">
        <div>
          <h2>Gestão de Gaveta e Movimentação Financeira</h2>
          <p style="font-size: 0.85rem; color: var(--text-muted);">Controle de troco, entradas em dinheiro, sangrias e suprimentos.</p>
        </div>

        <!-- CARDS RESUMO DO CAIXA -->
        <div class="kpi-grid">
          <div class="kpi-card">
            <span class="kpi-title">Fundo de Troco (Abertura)</span>
            <span class="kpi-val">R$ 150,00</span>
          </div>
          <div class="kpi-card">
            <span class="kpi-title">Entradas em Dinheiro</span>
            <span class="kpi-val green">+ R$ 460,00</span>
          </div>
          <div class="kpi-card">
            <span class="kpi-title">Total Sangrias (Saídas)</span>
            <span class="kpi-val red">- R$ 50,00</span>
          </div>
          <div class="kpi-card">
            <span class="kpi-title">Saldo Atual na Gaveta</span>
            <span class="kpi-val green" style="font-size: 1.7rem;">R$ 560,00</span>
          </div>
        </div>

        <!-- BOTÕES SANGARIA / SUPRIMENTO -->
        <div class="actions-row">
          <button class="btn-action btn-sangria" onclick="registrarMovimento('Sangria (Retirada)')">
            &#128184; Registrar Sangria (Retirar Dinheiro)
          </button>
          <button class="btn-action btn-suprimento" onclick="registrarMovimento('Suprimento (Entrada)')">
            &#128181; Registrar Suprimento (Adicionar Troco)
          </button>
        </div>

        <!-- HISTÓRICO DE MOVIMENTAÇÕES -->
        <div class="table-card">
          <div class="table-header">Histórico de Movimentações do Turno</div>
          <table class="mov-table">
            <thead>
              <tr>
                <th>Horário</th>
                <th>Tipo</th>
                <th>Descrição / Motivo</th>
                <th style="text-align: right;">Valor</th>
              </tr>
            </thead>
            <tbody id="lista-movimentos">
              <tr>
                <td>08:00</td>
                <td><span class="badge-tipo inicial">Abertura</span></td>
                <td>Fundo de Troco Inicial</td>
                <td style="text-align: right; font-weight: 700;">R$ 150,00</td>
              </tr>
              <tr>
                <td>10:15</td>
                <td><span class="badge-tipo saida">Sangria</span></td>
                <td>Pagamento Distribuidora de Carvão</td>
                <td style="text-align: right; font-weight: 700; color: var(--danger);">- R$ 50,00</td>
              </tr>
              <tr>
                <td>11:40</td>
                <td><span class="badge-tipo entrada">Venda Dinheiro</span></td>
                <td>Pedido #00481</td>
                <td style="text-align: right; font-weight: 700; color: var(--success);">+ R$ 86,00</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </main>
  </div>

  <script>
    function registrarMovimento(tipo) {
      const valor = prompt(`Digite o valor para a ${tipo}:`);
      if (valor) {
        const desc = prompt("Digite a descrição/motivo:");
        alert(`${tipo} de R$ ${valor} registrada com sucesso!`);
      }
    }
  </script>
</body>
</html>