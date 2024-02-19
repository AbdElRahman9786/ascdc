"use client";
import { useRouter } from "next/router";
import { Dropdown, ButtonToolbar } from "rsuite";
import { useParams } from "next/navigation";
function DropDown() {
  const Params = useParams();

  return (
    <>
      <ButtonToolbar>
        <Dropdown title={Params.locale} activeKey="a">
          <Dropdown.Item eventKey="a" className="cursor-pointer" onClick={()=>{}}>
            en
          </Dropdown.Item>
          <Dropdown.Item eventKey="b" className="cursor-pointer">
            ar
          </Dropdown.Item>
        </Dropdown>
      </ButtonToolbar>
    </>
  );
}

export default DropDown;
