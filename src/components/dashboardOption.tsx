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

export function DashboardOption() {
  const [menuSettingsUser, setSettingsUser] = useState(false);
  const [menuSettingsInventory, setSettingsInventory] = useState(false);
  const [menuSettingsProduct, setSettingsProduct] = useState(false);
  const [menuSettingsStock, setSettingsStock] = useState(false);
  const [menuSettingsOrder, setSettingsOrder] = useState(false);
  const [menuSettingsDelivery, setSettingsDelivery] = useState(false);
  const [menuSettingsPayment, setSettingsPayment] = useState(false);

  const [menuSettings, setSettings] = useState(false);

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
            Company
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
            System
          </Typography>

          <ListItem
            button
            onClick={() => setSettings(!menuSettings)}
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
              primary='Settings'
              style={{
                marginLeft: 10,
                fontSize: 14,
              }}
            />

            {menuSettings ? <MuiExpandLess /> : <MuiExpandMore />}
          </ListItem>

          {/* abrir menu de opcoes para settings */}

          {menuSettings && (
            <>
              <Typography
                color='textSecondary'
                align='center'
                variant='subtitle2'
                onClick={() => setSettings(!menuSettings)}
              >
                Settings
              </Typography>

              <MenuOptionTwoLevels
                icon={MdSettings}
                isOpen={menuSettingsUser}
                title='User'
                toggle={() => setSettingsUser(!menuSettingsUser)}
                options={[
                  {
                    to: '/system/settings/user/permission',
                    title: 'Permissions',
                    icon: VscCircleOutline,
                  },
                  {
                    to: '/system/settings/user/typeUser',
                    title: 'Type User',
                    icon: VscCircleOutline,
                  },
                ]}
              />

              <MenuOptionTwoLevels
                icon={MdSettings}
                isOpen={menuSettingsInventory}
                title='Inventory'
                toggle={() => setSettingsInventory(!menuSettingsInventory)}
                options={[
                  {
                    to: '/system/settings/typeInventory',
                    title: 'Inventory',
                    icon: VscCircleOutline,
                  },
                  {
                    to: '/system/settings/typeProductInventoryStock',
                    title: 'Inventory - Stock',
                    icon: VscCircleOutline,
                  },
                  {
                    to: '/system/settings/typeInventorySale',
                    title: 'Inventory - Sale',
                    icon: VscCircleOutline,
                  },
                  {
                    to: '/system/settings/typeInventoryBuy',
                    title: 'Inventory - Buy',
                    icon: VscCircleOutline,
                  },
                  {
                    to: '/system/settings/typeInventoryService',
                    title: 'Inventory - Service',
                    icon: VscCircleOutline,
                  },
                ]}
              />

              <MenuOptionTwoLevels
                icon={MdSettings}
                isOpen={menuSettingsProduct}
                title='Product'
                toggle={() => setSettingsProduct(!menuSettingsProduct)}
                options={[
                  {
                    to: '/system/settings/product/typeProduct',
                    title: 'Product',
                    icon: VscCircleOutline,
                  },
                  {
                    to: '/system/settings/product/typeProductStock',
                    title: 'Product Stock',
                    icon: VscCircleOutline,
                  },
                  {
                    to: '/system/settings/product/typeProductSale',
                    title: 'Product Sale',
                    icon: VscCircleOutline,
                  },
                  {
                    to: '/system/settings/product/typeProductBuy',
                    title: 'Product Buy',
                    icon: VscCircleOutline,
                  },
                ]}
              />

              <MenuOptionTwoLevels
                icon={MdSettings}
                isOpen={menuSettingsStock}
                title='Stock'
                toggle={() => setSettingsStock(!menuSettingsStock)}
                options={[
                  {
                    to: '/system/settings/stock/typeStock',
                    title: 'Stock',
                    icon: VscCircleOutline,
                  },
                  {
                    to: '/system/settings/stock/typeProductStock',
                    title: 'Product Stock',
                    icon: VscCircleOutline,
                  },
                ]}
              />

              <MenuOptionTwoLevels
                icon={MdSettings}
                isOpen={menuSettingsOrder}
                title='Order'
                toggle={() => setSettingsOrder(!menuSettingsOrder)}
                options={[
                  {
                    to: '/system/settings/order/typeOrder',
                    title: 'Order',
                    icon: VscCircleOutline,
                  },
                  {
                    to: '/system/settings/order/typeProductOrder',
                    title: 'Product Order',
                    icon: VscCircleOutline,
                  },
                ]}
              />

              <MenuOptionTwoLevels
                icon={MdSettings}
                isOpen={menuSettingsDelivery}
                title='Delivery'
                toggle={() => setSettingsDelivery(!menuSettingsDelivery)}
                options={[
                  {
                    to: '/system/settings/delivery/typeDelivery',
                    title: 'Delivery',
                    icon: VscCircleOutline,
                  },
                  {
                    to: '/system/settings/delivery/typeProductDelivery',
                    title: 'Product Delivery',
                    icon: VscCircleOutline,
                  },
                ]}
              />

              <MenuOptionTwoLevels
                icon={MdSettings}
                isOpen={menuSettingsPayment}
                title='Payment'
                toggle={() => setSettingsPayment(!menuSettingsPayment)}
                options={[
                  {
                    to: '/system/settings/payment/typePayment',
                    title: 'Payment',
                    icon: VscCircleOutline,
                  },
                  {
                    to: '/system/settings/payment/typeProductPayment',
                    title: 'Product Payment',
                    icon: VscCircleOutline,
                  },
                ]}
              />
            </>
          )}

          {/* Permission Nivel 1 */}

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
            Finance
          </Typography>

          <MenuOption icon={FaDollarSign} title='Dashboard' to='/dashboard/finance' />
          <MenuOption icon={BsFileEarmarkBarGraphFill} title='Reports' to='/finance/reports' />

          {/* Permission Nivel 2 */}

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
            People Management
          </Typography>

          <MenuOption icon={FaUserFriends} title='Dashboard' to='/dashboard/peopleManagement' />
          <MenuOption
            icon={BsFileEarmarkBarGraphFill}
            title='Reports'
            to='/peopleManagement/reports'
          />

          {/* Permission Nivel 3 */}

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
            Warehouse
          </Typography>

          <MenuOption icon={MdSettings} title='Dashboard' to='/dashboard/warehouse' />
          <MenuOption icon={MdSettings} title='Stock' to='/warehouse/stock' />
          <MenuOption icon={MdSettings} title='Order' to='/warehouse/order' />
          <MenuOption icon={MdSettings} title='Delivery' to='/warehouse/delivery' />
          <MenuOption icon={MdSettings} title='Payment' to='/warehouse/payment' />

          {/* Permission Nivel 4 */}

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
            Adm
          </Typography>

          <MenuOption icon={MdSettings} title='Dashboard' to='/dashboard/adm' />
          <MenuOption icon={MdSettings} title='Inventory' to='/adm/Inventory' />
          <MenuOption icon={MdSettings} title='Cliente' to='/adm/cliente' />
          <MenuOption icon={MdSettings} title='Product' to='/adm/product' />
          <MenuOption icon={MdSettings} title='User' to='/adm/user' />
          <MenuOption icon={MdSettings} title='Permission' to='/adm/permission' />

          {/* Permission Nivel 5 */}

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
            Employee
          </Typography>

          <MenuOption icon={MdSettings} title='Dashboard' to='/dashboard/employee' />
          <MenuOption icon={MdSettings} title='PDI' to='/employee/pdi' />
          <MenuOption icon={MdSettings} title='Educational' to='/employee/educational' />
        </List>
      </Scrollbars>
    </>
  );
}
