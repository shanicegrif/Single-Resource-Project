import React from 'react';

const Home = () => {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <img
                    src="/src/resources/oneShip.jpeg"
                    alt="One Piece Logo"
                    style={styles.logo}
                />
                <h1 style={styles.heading}>One Piece Bounty Board</h1>
            </header>
            <section style={styles.mainContent}>
                <img
                    src="/src/resources/onePiece.jpg"
                    alt="One Piece Characters"
                    style={styles.mainImage}
                />
                <p style={styles.introText}>
                    Welcome to the Bounty Board! Track and explore the bounties of the One Piece world.
                </p>
            </section>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
    },
    header: {
        backgroundColor: '#333',
        padding: '10px',
        textAlign: 'center',
    },
    logo: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginRight: '10px',
    },
    heading: {
        color: '#fff',
        margin: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainContent: {
        padding: '20px',
        textAlign: 'center',
    },
    mainImage: {
        width: '100%',
        height: 'auto',
        marginBottom: '20px',
        borderRadius: '8px',
    },
    introText: {
        fontSize: '18px',
        lineHeight: '1.5',
        color: 'white',
    },
};

export default Home;
