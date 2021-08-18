import React, { useState } from 'react';
import token_1_icon from '../../src/assets/images/token-1-icon.svg';
import token_2_icon from '../../src/assets/images/token-2-icon.svg';
import token_img from '../../src/assets/images/token-img.svg';
import token_3_icon from '../../src/assets/images/token-3-icon.svg';
import token_4_icon from '../../src/assets/images/token-4-icon.svg';
import DropdownArea from '../Atoms/DropdownCollapseArea';
import DropdownButton from '../Atoms/DropdownButton';

const TokenomicsDesktop = (props) => {
    const initialState = {
        redistribution: true,
        liquidity: false,
        dump: false,
        utility: false,
        tokenomics: false
    };
    const [Display, setDisplay] = useState(initialState);

    const showRedistribution = () => {
        const state = {
            redistribution: true,
            liquidity: false,
            dump: false,
            utility: false,
            tokenomics: false
        };
        setDisplay(state);
    };
    const showLiquidity = () => {
        const state = {
            redistribution: false,
            liquidity: true,
            dump: false,
            utility: false,
            tokenomics: false
        };
        setDisplay(state);
    };
    const showDump = () => {
        const state = {
            redistribution: false,
            liquidity: false,
            dump: true,
            utility: false,
            tokenomics: false
        };
        setDisplay(state);
    };
    const showUtility = () => {
        const state = {
            redistribution: false,
            liquidity: false,
            dump: false,
            utility: true,
            tokenomics: false
        };
        setDisplay(state);
    };
    const showTokenomics = () => {
        const state = {
            redistribution: false,
            liquidity: false,
            dump: false,
            utility: false,
            tokenomics: true
        };
        setDisplay(state);
    };

    return (
        <div className="row px-3">
            <div className="col-lg-6 p-0">
                <div className="col-md-none">
                    <p>
                        <DropdownButton
                            heading="Redistribution"
                            image={token_1_icon}
                            onPress={showRedistribution}
                            display={Display.redistribution}
                        />

                        <DropdownButton
                            heading="1% Liquidity Pool"
                            image={token_2_icon}
                            onPress={showLiquidity}
                            display={Display.liquidity}
                        />

                        <DropdownButton
                            heading="Anti-Dump Lock & 3% Sell Fee"
                            image={token_3_icon}
                            onPress={showDump}
                            display={Display.dump}
                        />

                        <DropdownButton
                            heading="Real Utility"
                            image={token_4_icon}
                            onPress={showUtility}
                            display={Display.utility}
                        />

                        <DropdownButton
                            heading="Tokenomins"
                            image={token_4_icon}
                            onPress={showTokenomics}
                            display={Display.tokenomics}
                        />
                    </p>
                </div>
            </div>

            <div className="col-lg-6 token-content-block col-md-none">
                <DropdownArea
                    display={Display.redistribution}
                    image={token_img}
                    heading="Redistribution"
                    text={`The token will have two redistribution systems: the
                        first is the tax from all transactions (2%) and the
                        second one is the revenue from the casino. The revenue
                        from the casino, the community decides when, how and the
                        amount to be distributed by voting through the DAO using
                        BNI as a governance token. \n
                        \n
                        BNB will be distributed to the token holders
                        automatically.`}
                />
                <DropdownArea
                    display={Display.liquidity}
                    image={token_img}
                    heading="1% Liquidity Pool"
                    text={`The token will have two redistribution systems: the
                    first is the tax from all transactions (2%) and the
                    second one is the revenue from the casino. The revenue
                    from the casino, the community decides when, how and the
                    amount to be distributed by voting through the DAO using
                    BNI as a governance token. \n
                    \n
                    BNB will be distributed to the token holders
                    automatically.`}
                />
                <DropdownArea
                    display={Display.dump}
                    image={token_img}
                    heading="Anti-Dump Lock & 3% Sell Fee"
                    text={`The token will have two redistribution systems: the
                    first is the tax from all transactions (2%) and the
                    second one is the revenue from the casino. The revenue
                    from the casino, the community decides when, how and the
                    amount to be distributed by voting through the DAO using
                    BNI as a governance token. \n
                    \n
                    BNB will be distributed to the token holders
                    automatically.`}
                />
                <DropdownArea
                    display={Display.utility}
                    image={token_img}
                    heading="Real Utility"
                    text={`The token will have two redistribution systems: the
                    first is the tax from all transactions (2%) and the
                    second one is the revenue from the casino. The revenue
                    from the casino, the community decides when, how and the
                    amount to be distributed by voting through the DAO using
                    BNI as a governance token. \n
                    \n
                    BNB will be distributed to the token holders
                    automatically.`}
                />
                <DropdownArea
                    display={Display.tokenomics}
                    image={token_img}
                    heading={'Tokenomics'}
                    text={`The token will have two redistribution systems: the
                    first is the tax from all transactions (2%) and the
                    second one is the revenue from the casino. The revenue
                    from the casino, the community decides when, how and the
                    amount to be distributed by voting through the DAO using
                    BNI as a governance token. \n
                    \n
                    BNB will be distributed to the token holders
                    automatically.`}
                />
            </div>
        </div>
    );
};

export default TokenomicsDesktop;
