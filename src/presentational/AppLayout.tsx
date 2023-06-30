import Link from 'next/link';
import { PropsWithChildren } from 'react';

import { css } from '~/__generated__/panda-css/css';

function AppLayout(props: PropsWithChildren) {
  return (
    <Layout>
      <RightPane />
      <Content>{props.children}</Content>
      <Navigator>
        <Link
          href="/"
          className={css({
            width: '100%',
          })}
        >
          <Navigator.Item>
            <Navigator.ItemText>All Menu</Navigator.ItemText>
          </Navigator.Item>
        </Link>
        <Link
          href="/orders"
          className={css({
            width: '100%',
          })}
        >
          <Navigator.Item>
            <Navigator.ItemText>Orders</Navigator.ItemText>
          </Navigator.Item>
        </Link>
      </Navigator>
    </Layout>
  );
}

export default AppLayout;

export function Layout(props: PropsWithChildren) {
  return (
    <div
      className={css({
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        maxWidth: '640px', // media sm = 640px
        md: {
          maxWidth: '100%',
          borderInline: '4px solid #e7e7ef',
          flexDirection: 'row-reverse',
        },
      })}
    >
      {props.children}
    </div>
  );
}

export function RightPane(props: PropsWithChildren) {
  return (
    <div
      className={css({
        display: 'none',
        md: {
          display: 'flex',
          width: '100%',
        },
      })}
    >
      {props.children}
    </div>
  );
}

export function Content(props: PropsWithChildren) {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflowY: 'scroll',
        width: '100%',
        paddingBlockEnd: '65px', // Navigator height 65px
        md: {
          paddingBlockEnd: 'initial',
          borderLeft: 'solid 4px #f2f3f5',
          borderRight: 'solid 4px #f2f3f5',
        },
      })}
    >
      {props.children}
    </div>
  );
}

function Navigator(props: PropsWithChildren) {
  return <NavigatorContainer>{props.children}</NavigatorContainer>;
}

function NavigatorContainer(props: PropsWithChildren) {
  return (
    <div
      className={css({
        position: 'fixed',
        bottom: 0,
        zIndex: '$navigator',
        display: 'flex',
        width: '100%',
        height: '65px',
        justifyContent: 'center',
        borderTop: 'solid 4px',
        borderColor: '#f2f3f5',
        backgroundColor: '#f2f3f5',
        md: {
          position: 'initial',
          bottom: 0,
          zIndex: 'initial',
          flexDirection: 'column',
          justifyContent: 'start',
          height: '100%',
        },
      })}
    >
      {props.children}
    </div>
  );
}

function NavigatorItemText(props: PropsWithChildren) {
  return (
    <p
      className={css({
        display: 'flex',
        justifyContent: 'center',
        fontSize: '15px',
        margin: '0px',
        color: 'black',
        md: {
          marginInlineStart: '10px',
        },
      })}
    >
      {props.children}
    </p>
  );
}
Navigator.ItemText = NavigatorItemText;

function NavigatorItem(props: PropsWithChildren) {
  return (
    <div
      className={css({
        textDecoration: 'none',
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '3px',
        backgroundColor: 'white',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '#d9dadc',
        },
        md: {
          flexDirection: 'row',
          minHeight: '50px',
          width: 'initial',
          justifyContent: 'start',
          padding: '10px',
          marginInline: '70px',
        },
      })}
    >
      {props.children}
    </div>
  );
}
Navigator.Item = NavigatorItem;

function NavigatorItemIcon(props: PropsWithChildren) {
  return (
    <span
      className={css({
        display: 'flex',
        width: '20px',
        height: '20px',
        justifyContent: 'center',
      })}
    >
      {props.children}
    </span>
  );
}
Navigator.ItemIcon = NavigatorItemIcon;
