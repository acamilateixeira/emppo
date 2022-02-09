import { MenuOption } from './menuOption';
import { FaBuilding, FaDollarSign, FaUserFriends } from 'react-icons/fa';
import { IconButton, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { MdSettings, MdWeb } from 'react-icons/md';
import { VscCircleOutline } from 'react-icons/vsc';
import { BsFileEarmarkBarGraphFill } from 'react-icons/bs';
import MuiExpandLess from '@material-ui/icons/ExpandLess';
import MuiExpandMore from '@material-ui/icons/ExpandMore';
import { MenuOptionTwoLevels } from './menuOptionTwoLevels';
import { useState } from 'react';
import Scrollbars from 'react-custom-scrollbars';

export function PainelOption() {
  const [menuConfiguracoesUsuario, setConfiguracoesUsuario] = useState(false);
  const [menuConfiguracoesFornecedor, setConfiguracoesFornecedor] = useState(false);
  const [menuConfiguracoesProduto, setConfiguracoesProduto] = useState(false);
  const [menuConfiguracoesEstoque, setConfiguracoesEstoque] = useState(false);
  const [menuConfiguracoesPedido, setConfiguracoesPedido] = useState(false);
  const [menuConfiguracoesEntrega, setConfiguracoesEntrega] = useState(false);
  const [menuConfiguracoesPagamento, setConfiguracoesPagamento] = useState(false);

  const [menuConfiguracoes, setConfiguracoes] = useState(false);

  return (
    <>
      <Scrollbars
        autoHide
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <List
          style={{
            padding: 10,
            width: '100%',
            height: '100%',
          }}
        >
          <Typography
            color='textSecondary'
            align='center'
            style={{
              padding: 5,
              border: '1px solid #ccc',
              borderRadius: '1rem',
              margin: 5,
            }}
          >
            Empresa
          </Typography>

          <MenuOption icon={FaBuilding} title='Intranet' to='/' />

          <MenuOption icon={MdWeb} title='Extranet' to='/extranet' />

          <Typography
            color='textSecondary'
            align='center'
            style={{
              padding: 5,
              border: '1px solid #ccc',
              borderRadius: '1rem',
              margin: 5,
            }}
          >
            Sistema
          </Typography>

          <ListItem
            button
            onClick={() => setConfiguracoes(!menuConfiguracoes)}
            style={{
              paddingTop: 2,
              paddingBottom: 2,
              borderRadius: 16,
            }}
          >
            <IconButton>
              <MdSettings size={14} />
            </IconButton>

            <ListItemText
              primary='Configurações'
              style={{
                marginLeft: 10,
                fontSize: 14,
              }}
            />

            {menuConfiguracoes ? <MuiExpandLess /> : <MuiExpandMore />}
          </ListItem>

          {/* abrir menu de opcoes para configurações */}

          {menuConfiguracoes && (
            <>
              <Typography
                color='textSecondary'
                align='center'
                variant='subtitle2'
                onClick={() => setConfiguracoes(!menuConfiguracoes)}
              >
                Configurações
              </Typography>

              <MenuOptionTwoLevels
                icon={MdSettings}
                isOpen={menuConfiguracoesUsuario}
                title='Usuário'
                toggle={() => setConfiguracoesUsuario(!menuConfiguracoesUsuario)}
                options={[
                  {
                    to: '/configuracoes/usuario/tipoPermissao',
                    title: 'Permissões',
                    icon: VscCircleOutline,
                  },
                  {
                    to: '/configuracoes/usuario/tipoUsuario',
                    title: 'Tipo de Usuário',
                    icon: VscCircleOutline,
                  },
                ]}
              />

              <MenuOptionTwoLevels
                icon={MdSettings}
                isOpen={menuConfiguracoesFornecedor}
                title='Fornecedor'
                toggle={() => setConfiguracoesFornecedor(!menuConfiguracoesFornecedor)}
                options={[
                  {
                    to: '/configuracoes/tipoFornecedor',
                    title: 'Fornecedor',
                    icon: VscCircleOutline,
                  },
                  {
                    to: '/configuracoes/tipoProdutoFornecedor',
                    title: 'Produto Fornecedor',
                    icon: VscCircleOutline,
                  },
                  {
                    to: '/configuracoes/tipoProdutoFornecedorEstoque',
                    title: 'Produto Fornecedor Estoque',
                    icon: VscCircleOutline,
                  },
                  {
                    to: '/configuracoes/tipoProdutoFornecedorVenda',
                    title: 'Produto Fornecedor Venda',
                    icon: VscCircleOutline,
                  },
                  {
                    to: '/configuracoes/tipoProdutoFornecedorCompra',
                    title: 'Produto Fornecedor Compra',
                    icon: VscCircleOutline,
                  },
                  {
                    to: '/configuracoes/tipoProdutoFornecedorServico',
                    title: 'Produto Fornecedor Serviço',
                    icon: VscCircleOutline,
                  },
                ]}
              />

              <MenuOptionTwoLevels
                icon={MdSettings}
                isOpen={menuConfiguracoesProduto}
                title='Produto'
                toggle={() => setConfiguracoesProduto(!menuConfiguracoesProduto)}
                options={[
                  {
                    to: '/configuracoes/produto/tipoProduto',
                    title: 'Produto',
                    icon: VscCircleOutline,
                  },
                  {
                    to: '/configuracoes/produto/tipoProdutoEstoque',
                    title: 'Produto Estoque',
                    icon: VscCircleOutline,
                  },
                  {
                    to: '/configuracoes/produto/tipoProdutoVenda',
                    title: 'Produto Venda',
                    icon: VscCircleOutline,
                  },
                  {
                    to: '/configuracoes/produto/tipoProdutoCompra',
                    title: 'Produto Compra',
                    icon: VscCircleOutline,
                  },
                ]}
              />

              <MenuOptionTwoLevels
                icon={MdSettings}
                isOpen={menuConfiguracoesEstoque}
                title='Estoque'
                toggle={() => setConfiguracoesEstoque(!menuConfiguracoesEstoque)}
                options={[
                  {
                    to: '/configuracoes/estoque/tipoEstoque',
                    title: 'Estoque',
                    icon: VscCircleOutline,
                  },
                  {
                    to: '/configuracoes/estoque/tipoProdutoEstoque',
                    title: 'Produto Estoque',
                    icon: VscCircleOutline,
                  },
                ]}
              />

              <MenuOptionTwoLevels
                icon={MdSettings}
                isOpen={menuConfiguracoesPedido}
                title='Pedido'
                toggle={() => setConfiguracoesPedido(!menuConfiguracoesPedido)}
                options={[
                  {
                    to: '/configuracoes/pedido/tipoPedido',
                    title: 'Pedido',
                    icon: VscCircleOutline,
                  },
                  {
                    to: '/configuracoes/pedido/tipoProdutoPedido',
                    title: 'Produto Pedido',
                    icon: VscCircleOutline,
                  },
                ]}
              />

              <MenuOptionTwoLevels
                icon={MdSettings}
                isOpen={menuConfiguracoesEntrega}
                title='Entrega'
                toggle={() => setConfiguracoesEntrega(!menuConfiguracoesEntrega)}
                options={[
                  {
                    to: '/configuracoes/entrega/tipoEntrega',
                    title: 'Entrega',
                    icon: VscCircleOutline,
                  },
                  {
                    to: '/configuracoes/entrega/tipoProdutoEntrega',
                    title: 'Produto Entrega',
                    icon: VscCircleOutline,
                  },
                ]}
              />

              <MenuOptionTwoLevels
                icon={MdSettings}
                isOpen={menuConfiguracoesPagamento}
                title='Pagamento'
                toggle={() => setConfiguracoesPagamento(!menuConfiguracoesPagamento)}
                options={[
                  {
                    to: '/configuracoes/pagamento/tipoPagamento',
                    title: 'Pagamento',
                    icon: VscCircleOutline,
                  },
                  {
                    to: '/configuracoes/pagamento/tipoProdutoPagamento',
                    title: 'Produto Pagamento',
                    icon: VscCircleOutline,
                  },
                ]}
              />
            </>
          )}

          {/* Permissão Nivel 1 */}

          <Typography
            color='textSecondary'
            align='center'
            style={{
              padding: 5,
              border: '1px solid #ccc',
              borderRadius: '1rem',
              margin: 5,
            }}
          >
            Financeiro
          </Typography>

          <MenuOption icon={FaDollarSign} title='Painel' to='/painel/financeiro' />
          <MenuOption
            icon={BsFileEarmarkBarGraphFill}
            title='Relatórios'
            to='/financeiro/relatorios'
          />

          {/* Permissão Nivel 2 */}

          <Typography
            color='textSecondary'
            align='center'
            style={{
              padding: 5,
              border: '1px solid #ccc',
              borderRadius: '1rem',
              margin: 5,
            }}
          >
            Recursos Humanos
          </Typography>

          <MenuOption icon={FaUserFriends} title='Painel' to='/painel/rh' />
          <MenuOption icon={BsFileEarmarkBarGraphFill} title='Relatórios' to='/rh/relatorios' />

          {/* Permissão Nivel 3 */}

          <Typography
            color='textSecondary'
            align='center'
            style={{
              padding: 5,
              border: '1px solid #ccc',
              borderRadius: '1rem',
              margin: 5,
            }}
          >
            Almoxarifado
          </Typography>

          <MenuOption icon={MdSettings} title='Painel' to='/painel/almoxarifado' />
          <MenuOption icon={MdSettings} title='Estoque' to='/almoxarifado/estoque' />
          <MenuOption icon={MdSettings} title='Pedido' to='/almoxarifado/pedido' />
          <MenuOption icon={MdSettings} title='Entrega' to='/almoxarifado/entrega' />
          <MenuOption icon={MdSettings} title='Pagamento' to='/almoxarifado/pagamento' />

          {/* Permissão Nivel 4 */}

          <Typography
            color='textSecondary'
            align='center'
            style={{
              padding: 5,
              border: '1px solid #ccc',
              borderRadius: '1rem',
              margin: 5,
            }}
          >
            Administrativo
          </Typography>

          <MenuOption icon={MdSettings} title='Painel' to='/painel/administrativo' />
          <MenuOption icon={MdSettings} title='Fornecedor' to='/administrativo/fornecedor' />
          <MenuOption icon={MdSettings} title='Cliente' to='/administrativo/cliente' />
          <MenuOption icon={MdSettings} title='Produto' to='/administrativo/produto' />
          <MenuOption icon={MdSettings} title='Usuário' to='/administrativo/usuario' />
          <MenuOption icon={MdSettings} title='Permissão' to='/administrativo/permissao' />

          {/* Permissão Nivel 5 */}

          <Typography
            color='textSecondary'
            align='center'
            style={{
              padding: 5,
              border: '1px solid #ccc',
              borderRadius: '1rem',
              margin: 5,
            }}
          >
            Funcionário
          </Typography>

          <MenuOption icon={MdSettings} title='Painel' to='/painel/funcionario' />
          <MenuOption icon={MdSettings} title='Ponto' to='/funcionario/ponto' />
          <MenuOption icon={MdSettings} title='Folha' to='/funcionario/folha' />
          <MenuOption icon={MdSettings} title='PDI' to='/funcionario/pdi' />
          <MenuOption
            icon={MdSettings}
            title='Auto Desenvolvimento'
            to='/funcionario/autoDesenvolvimento'
          />
        </List>
      </Scrollbars>
    </>
  );
}
