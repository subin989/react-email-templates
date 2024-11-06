import {
  Body,
  Container,
  Hr,
  Html,
  Img,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

const OpportunityTransferTemplate = ({
  count,
  employee,
  timestamp,
  opportunity_details,
}) => (
  <Html>
    <Body>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#007291",
              },
            },
          },
        }}
      >
        <Container className="p-4">
          <Img
            className="mx-auto"
            src={`https://konnectcraft.ca/wp-content/uploads/2022/03/Approval-Genie.png`}
            alt="Approval Genie"
            width="auto"
            height="150"
          />
          <Hr className="my-4 border-t border-gray-200" />

          <Section>
            <Text className="text-lg leading-7">
              You have received <strong>{count}</strong> opportunities
              transferred to your account by <strong>{employee}</strong> at
              <strong> {timestamp}</strong>. An overview of the transferred
              opportunities can be found below.
            </Text>
            <table className="table w-full mt-4">
              <thead>
                <tr className="text-left bg-gray-100">
                  <th className="p-2 font-bold text-center">
                    Opportunity Name
                  </th>
                  <th className="p-2 font-bold text-center">Opportunity ID</th>
                </tr>
              </thead>
              <tbody>
                {opportunity_details.map((opportunity) => (
                  <tr key={opportunity.id}>
                    <td className="p-2 text-center">{opportunity.name}</td>
                    <td className="p-2 text-center">
                      <span className="text-blue-500">{opportunity.id}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Hr className="my-4 border-t border-gray-200" />
          </Section>

          <Section className="text-center mt-8">
            <Text className="text-sm text-gray-500">
              © 2024 Approvalgenie, Canada
            </Text>
            <Text className="footerText text-sm text-gray-500">
              This email may contain confidential and privileged information. If
              you are not the intended recipient, please delete the email and
              notify the sender.
            </Text>
          </Section>
        </Container>
      </Tailwind>
    </Body>
  </Html>
);

export default OpportunityTransferTemplate;
