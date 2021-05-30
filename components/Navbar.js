import { Menu, Layout, Typography } from "antd";
import {useRouter} from 'next/router'
import { BulbFilled } from "@ant-design/icons";
import Link from "next/link";
const { Text } = Typography;

export default function Navbar() {
  const router = useRouter();

  const routes = [
    {
      title: "Home",
      href: "/",
      key: "1"
    },
    {
      title: "About Me",
      href: "/about",
      key: "2"
    },
    {
      title: "Contact",
      href: "/contact",
      key: "3"
    }
  ]
  return (
    <Layout.Header className="d-flex align-items-center">
      <div className="logo d-flex  align-items-center" onClick={()=>router.push('/')}>
        <BulbFilled className="text-white fs-5 px-1" />
        <Text className="text-white">thefakedeal</Text>
      </div>
      <Menu mode="horizontal" selectable={false} className="d-flex flex-wrap justify-content-end flex-grow-1" theme="dark">
        {
          routes.map(({href,title,key})=>(
            <Menu.Item  >
            <Link href={href} key={key}>
              <a className="text-decoration-none ">
                {title}
              </a>
            </Link>
          </Menu.Item>
          ))
        }
      </Menu>
    </Layout.Header>
  );
}
