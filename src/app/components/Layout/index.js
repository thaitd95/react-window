import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    height: 100vh;
`

const SideBarWrapper = styled.div`
    min-width: 300px;
`

const ContentWrapper = styled.div`
    width: calc(100vw - 300px);
`

const Layout = ({ sidebar, content }) => {
    return (
        <Container>
            <SideBarWrapper>{sidebar()}</SideBarWrapper>
            <ContentWrapper>{content()}</ContentWrapper>
        </Container>
    )
}

export default Layout;