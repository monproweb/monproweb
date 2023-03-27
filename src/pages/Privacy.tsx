import { Box, PageLayout, Heading, Text } from '@primer/react'

export default function Privacy() {
    return (
        <>
            <PageLayout>
                <PageLayout.Header aria-label="Header"></PageLayout.Header>
                <PageLayout.Content aria-label="Content">
                    <Box>
                        <Heading>Privacy Policy</Heading>
                        <Text>
                            This website ("monproweb.io") is operated by
                            Monproweb. We respect your privacy and are committed
                            to protecting it through our compliance with this
                            policy.
                        </Text>
                        <Text>
                            This policy describes the types of information we
                            may collect from you or that you may provide when
                            you visit the Site and our practices for collecting,
                            using, maintaining, protecting, and disclosing that
                            information.
                        </Text>
                        <Text>
                            Please read this policy carefully to understand our
                            policies and practices regarding your information
                            and how we will treat it. If you do not agree with
                            our policies and practices, do not use the Site. By
                            accessing or using the Site, you agree to this
                            privacy policy. This policy may change from time to
                            time. Your continued use of the Site after we make
                            changes is deemed to be acceptance of those changes,
                            so please check the policy periodically for updates.
                        </Text>
                    </Box>
                    <Box>
                        <Heading>Information We Collect</Heading>
                        <Text>
                            We collect information from you when you visit the
                            Site or fill out a form on the Site. The types of
                            personal information we may collect include your
                            name, email address, phone number, and any other
                            information you choose to provide.
                        </Text>
                        <Text>
                            We may also automatically collect certain
                            information about your device and your use of the
                            Site, including your IP address, browser type,
                            operating system, device type, and location
                            information. We may also collect information about
                            your browsing activity on the Site, such as the
                            pages you visit and the links you click.
                        </Text>
                        <Text>
                            We use Google Analytics to collect and analyze
                            information about your use of the Site. This service
                            may collect and use information such as your IP
                            address, browser type, operating system, device
                            type, and location information. Google Analytics may
                            also collect information about your browsing
                            activity on the Site, such as the pages you visit
                            and the links you click. We use this information to
                            improve the Site and to better understand the needs
                            and interests of our users.
                        </Text>
                    </Box>
                    <Box>
                        <Heading>Use of Information</Heading>
                        <Text>
                            We use the information we collect from you for a
                            variety of purposes, including to:
                        </Text>
                        <ul>
                            <li>
                                <Text>
                                    Provide, maintain, and improve the Site
                                </Text>
                            </li>
                            <li>
                                <Text>
                                    Communicate with you about your use of the
                                    Site
                                </Text>
                            </li>
                            <li>
                                <Text>
                                    Respond to your inquiries and requests
                                </Text>
                            </li>
                            <li>
                                <Text>
                                    Administer surveys, contests, or other
                                    promotional activities
                                </Text>
                            </li>
                        </ul>
                    </Box>
                    <Box>
                        <Heading>Disclosure of Information</Heading>
                        <Text>
                            We may disclose your personal information to third
                            parties for the following purposes:
                        </Text>
                        <ul>
                            <li>
                                <Text>To comply with legal obligations</Text>
                            </li>
                            <li>
                                <Text>
                                    To protect the rights, property, or safety
                                    of Monproweb, our users, or others
                                </Text>
                            </li>
                            <li>
                                <Text>
                                    To enforce our policies or contracts
                                </Text>
                            </li>
                        </ul>
                        <Text>
                            We may also share your personal information with
                            third parties for their own marketing or analytics
                            purposes.
                        </Text>
                    </Box>
                    <Box>
                        <Heading>Your Choices</Heading>
                        <Text>
                            You have the following choices regarding the
                            collection, use, and sharing of your personal
                            information:
                        </Text>
                        <ul>
                            <li>
                                <Text>
                                    You can opt out of Google Analytics tracking
                                    by installing the Google Analytics Opt-out
                                    Browser Add-on.
                                </Text>
                            </li>
                            <li>
                                <Text>
                                    You can also control the information that is
                                    shared with third parties for their own
                                    marketing or analytics purposes by adjusting
                                    your browser settings or using privacy tools
                                    such as the Privacy Badger extension.
                                </Text>
                            </li>
                        </ul>
                    </Box>
                    <Box>
                        <Heading>Data Security</Heading>
                        <Text>
                            We have implemented measures designed to secure your
                            personal information from accidental loss and from
                            unauthorized access, use, alteration, and
                            disclosure. However, no method of transmitting or
                            storing data is completely secure, and we cannot
                            guarantee the security of your information.
                        </Text>
                    </Box>
                    <Box>
                        <Heading>Links to Other Websites</Heading>
                        <Text>
                            The Site may contain links to other websites. If you
                            click on a third-party link, you will be directed to
                            that website. We are not responsible for the privacy
                            practices of third-party websites. We encourage you
                            to read the privacy policies of any website you
                            visit.
                        </Text>
                    </Box>
                    <Box>
                        <Heading>Children's Privacy</Heading>
                        <Text>
                            The Site is not intended for children under the age
                            of 13. We do not knowingly collect personal
                            information
                        </Text>
                    </Box>
                </PageLayout.Content>
                <PageLayout.Footer aria-label="Footer"></PageLayout.Footer>
            </PageLayout>
        </>
    )
}
