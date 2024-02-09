import Image from "next/image";
import { Inter } from "next/font/google";
import LayoutWithSidebar from "@/components/ui/LayoutWithSidebar";
import PanelSection from "@/components/ui/PanelSection";
import Panel from "@/components/ui/Panel";
import Badge from "@/components/ui/Badge";
import DescriptionListItem from "@/components/ui/DescriptionListItem";
import { CheckIcon, ClipboardIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Menu } from "@headlessui/react";
import DropdownItem from "@/components/ui/DropdownItem";
import DropdownMenu from "@/components/ui/DropdownMenu";

const inter = Inter({ subsets: ["latin"] });

const breadcrumbs = {
  pages: [
    {
      name: "Fine-grained Tokens",
      href: "/tokens",
    },
    {
      name: "873a0724-e9d1-48ec-89d9-4266aab9dc63",
      current: true,
    },
  ],
};

export default function Home() {
  return (
    <LayoutWithSidebar
      breadcrumbs={breadcrumbs}
      className="py-10"
      title="Fine-grained Token"
    >
      <div className="w-full sm:w-4/5">
        <Panel className="">
          <PanelSection>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h3>Fine-grained Token</h3>
                <Badge color="green">Valid</Badge>
              </div>
              <DropdownMenu useIcon>
                <Menu.Item key="addAddress">
                  <DropdownItem>Revoke</DropdownItem>
                </Menu.Item>
                <Menu.Item key="variation">
                  <DropdownItem dataTestId="addVariation">
                    Regenerate
                  </DropdownItem>
                </Menu.Item>
              </DropdownMenu>
            </div>
            <div className="mb-4 mt-2 flex w-96 rounded-md shadow-sm">
              <div className="relative flex flex-grow items-stretch focus-within:z-10">
                <input
                  type="email"
                  name="email"
                  id="email"
                  readOnly
                  className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="John Smith"
                  value="873a0724-e9d1-48ec-89d9-4266aab9dc63"
                />
              </div>
              <button
                type="button"
                className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <span className="sr-only">Copy to Clipboard</span>
                <ClipboardIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <DescriptionListItem label="Issued">
                4/2/2023 10:00 PM PST
              </DescriptionListItem>
              <DescriptionListItem label="Expires">
                5/2/2023 10:00 PM PST
              </DescriptionListItem>
            </div>
            <DescriptionListItem label="Description" className="line-clamp-3">
              A brief description of the token. A brief description of the
              token.A brief description of the token.A brief description of the
              token.A brief description of the token.A brief description of the
              token.A brief description of the token.
            </DescriptionListItem>
          </PanelSection>
        </Panel>

        <Panel className="mt-8">
          <PanelSection>
            <h3 className="">Token Permissions</h3>
          </PanelSection>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Permission</th>
                  <th>Read</th>
                  <th>Write</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>DeterminateSystem/agenix-cli</td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                  <td>
                    <XMarkIcon className="h-5 w-5 text-red-500" />
                  </td>
                </tr>
                <tr>
                  <td>DeterminateSystem/flake-schemas</td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                  <td>
                    <XMarkIcon className="h-5 w-5 text-red-500" />
                  </td>
                </tr>
                <tr>
                  <td>DeterminateSystem/nix-netboot-serve</td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
                <tr>
                  <td>DeterminateSystem/nuenv</td>
                  <td>
                    <XMarkIcon className="h-5 w-5 text-red-500" />
                  </td>
                  <td>
                    <XMarkIcon className="h-5 w-5 text-red-500" />
                  </td>
                </tr>
                <tr>
                  <td>DeterminateSystem/flake-dmarc-cat</td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
                <tr>
                  <td>DeterminateSystem/agenix-cli-2</td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
                <tr>
                  <td>DeterminateSystem/agenix-cli-3</td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
                <tr>
                  <td>DeterminateSystem/agenix-cli-4</td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
                <tr>
                  <td>DeterminateSystem/agenix-cli-5</td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
                <tr>
                  <td>DeterminateSystem/agenix-cli-6</td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
                <tr>
                  <td>DeterminateSystem/agenix-cli-12</td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
                <tr>
                  <td>DeterminateSystem/agenix-cli-13</td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
                <tr>
                  <td>DeterminateSystem/agenix-cli-14</td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
                <tr>
                  <td>DeterminateSystem/agenix-cli-15</td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
                <tr>
                  <td>DeterminateSystem/agenix-cli-16</td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
                <tr>
                  <td>DeterminateSystem/agenix-cli-22</td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
                <tr>
                  <td>DeterminateSystem/agenix-cli-23</td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
                <tr>
                  <td>DeterminateSystem/agenix-cli-24</td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
                <tr>
                  <td>DeterminateSystem/agenix-cli-25</td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
                <tr>
                  <td>DeterminateSystem/agenix-cli-26</td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                  <td>
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Panel>
      </div>
    </LayoutWithSidebar>
  );
}
