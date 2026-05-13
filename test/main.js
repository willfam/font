const routerUrls = {
    private: {
        main: {
            url: 'main',
            login: 'main/login',
            commissioning: {
                inProgress: 'main/commissioning/in-progress',
                clearingAllData: 'main/commissioning/clearing-all-data',
                completedClearning: 'main/commissioning/completed-cleaning',
            },
            tapCardLogin: 'main/tap-card-login',
            manualLogin: 'main/manual-login',
            busStopInformation: 'main/bus-stop-information',
            frontExit: 'main/front-exit',
            cashPayment: 'main/cash-payment',
            frontDoor: 'main/front-door',
            rearDoor: 'main/rear-door',
            free: 'main/free',
            redeem: 'main/redeem',
            breakdown: 'main/breakdown',
            endTrip: 'main/end-trip',
            settings: 'main/settings',
            languageSetting: 'main/language-setting',
            dateTimeSetting: 'main/date-time-setting',
            fareConsoleSetting: 'main/fare-console-setting',
            lockScreen: 'main/lock-screen',
            dagwOperation: 'main/dagw-operation',
            accessDenied: 'main/access-denied',
            busOperation: {
                url: 'main/bus-operation',
                startTripValidInfo: 'main/bus-operation/start-trip',
                // startTripConnectedPro: 'main/bus-operation/start-trip/connected-productive',
                endShift: 'main/bus-operation/end-shift',
                startTripInvalidInfo: 'main/bus-operation/start-trip-invalid-info',
                externalDevices: 'main/bus-operation/external-devices',
            },
        },
        busOperation: {
            url: 'bus-operation',
            externalDevices: 'bus-operation/external-devices',
            endShift: 'bus-operation/end-shift',
        },
        fare: {
            url: 'fare',
            topUp: 'fare/top-up',
            transaction: 'fare/transaction',
            cancelRideCV1: 'fare/cancel-ride-cv1',
            cancelRideCV2: 'fare/cancel-ride-cv2',
            concessionCV1: 'fare/concession-cv1',
            concessionCV2: 'fare/concession-cv2',
            cvOperation: {
                url: 'fare/cv-operation',
                showCVStatus: 'fare/cv-operation/show-cv-status',
                setCV: 'fare/cv-operation/set-cv',
                cvModeControl: 'fare/cv-operation/cv-mode-control',
                powerAllCVOn: 'fare/cv-operation/power-all-cv-on',
                powerAllCVOff: 'fare/cv-operation/power-all-cv-off',
                cvPowerControl: 'fare/cv-operation/cv-power-control',
                resetAllCV: 'fare/cv-operation/reset-all-cv',
            },
            blsOperation: {
                url: 'fare/bls-operation',
                manualLocation: 'fare/bls-operation/manual-location',
                autoLocation: 'fare/bls-operation/auto-location',
            },
            printerOperation: {
                url: 'fare/printer-operation',
                inspectorTicket: 'fare/printer-operation/inspector-ticket',
                dailyTripLog: 'fare/printer-operation/daily-trip-log',
                testReceipt: 'fare/printer-operation/test-receipt',
                retentionTicket: 'fare/printer-operation/retention-ticket',
                printerOn: 'fare/printer-operation/printer-on',
                printerOff: 'fare/printer-operation/printer-off',
                status: 'fare/printer-operation/status',
            },
            lockScreen: 'fare/lock-screen',
            accessDenied: 'fare/access-denied',
            waitingTripStart: 'fare/waiting-trip-start',
            logOff: 'fare/log-off',
        },
        fms: {
            url: 'fms',
        },
        maintenance: {
            url: 'maintenance',
            accessDenied: 'maintenance/access-denied',
            logOff: 'maintenance/log-off',
            fare: {
                url: 'maintenance/fare',
                appUpgrade: 'maintenance/fare/application-upgrade',
                viewParameter: 'maintenance/fare/view-parameter',
                blsInformation: 'maintenance/fare/bls-information',
                calibrateBLS: {
                    url: 'maintenance/fare/calibrate-bls',
                    calibrateBlsManualInput: 'maintenance/fare/calibrate-bls/manual-input',
                    calibrateBlsCalibration: 'maintenance/fare/calibrate-bls/bls-calibration',
                },
                changeWlanKey: 'maintenance/fare/change-wlan-key',
                checkPrinter: 'maintenance/fare/check-printer',
                displayAudit: 'maintenance/fare/display-audit',
                gyroSwitch: 'maintenance/fare/gyro-switch',
                loadParameter: 'maintenance/fare/load-parameter',
                printBcvResult: 'maintenance/fare/print-bcv-result',
                redetectBls: 'maintenance/fare/redetect-bls',
                redetectCrp: 'maintenance/fare/redetect-crp',
                redetectCv: 'maintenance/fare/redetect-cv',
                redetectFms: 'maintenance/fare/redetect-fms',
                resetBls: 'maintenance/fare/reset-bls',
                saveTransaction: 'maintenance/fare/save-transaction',
                testPrint: 'maintenance/fare/test-print',
                versionInfo: 'maintenance/fare/version-info',
                externalDevices: 'maintenance/fare/external-devices',
                decommission: 'maintenance/fare/decommission',
                setting: 'maintenance/fare/setting',
                ticketingConsole: {
                    url: 'maintenance/fare/fare-console',
                    deckType: 'maintenance/fare/fare-console/deck-type',
                    blsSetting: 'maintenance/fare/fare-console/bls',
                    timeSetting: 'maintenance/fare/fare-console/time-setting',
                    dateSetting: 'maintenance/fare/fare-console/date-setting',
                    busId: 'maintenance/fare/fare-console/bus-id',
                    complimentaryDay: 'maintenance/fare/fare-console/complimentary-day',
                    deleteParameter: 'maintenance/fare/fare-console/delete-parameter',
                },
            },
            cjb: {
                url: 'maintenance/cjb',
            },
        },
    },
    public: {
        signIn: 'sign-in',
        welcome: 'welcome',
        mqtt: 'mqtt',
    },
};

let autoClickInterval;
let targetSelector = 'button'; // replace with Angular button selector

function getRandomInt(min, max) {
    min = Math.ceil(min); // round up lower bound
    max = Math.floor(max); // round down upper bound
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startAutoClicker(interval = 1000) {
    if (autoClickInterval) clearInterval(autoClickInterval);

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        autoClickInterval = setInterval(() => {
            const currentURL = window.location.href;
            if (currentURL?.indexOf(routerUrls.private.main.busStopInformation) > -1) {
                targetSelector = 'button';
            } else if (currentURL?.indexOf(routerUrls.private.main.free) > -1) {
                targetSelector = '.btn.btn-confirm';
                console.log('Free - Using selector:', targetSelector);
            } else if (currentURL?.indexOf(routerUrls.private.main.frontDoor) > -1) {
                targetSelector = '.toggle-cv-container .button, .toggle-cv-container .btn.btn-confirm';
                console.log('Front Door - Using selector:', targetSelector);
            } else if (currentURL?.indexOf(routerUrls.private.main.breakdown) > -1) {
                targetSelector =
                    '.breakdown-container .button, .row .right, .bus-stop-list li, .btn-value, .breakdown-container .btn.btn-confirm';
                console.log('Break down - Using selector:', targetSelector);
            } else if (currentURL?.indexOf(routerUrls.private.main.cashPayment) > -1) {
                let input = document.querySelector('#inputField');
                if (input) {
                    input.value = getRandomInt(0, 10).toString();
                }
                targetSelector =
                    '.cash-payment-container .tk-button, .cash-btn-wrap, .cash-payment-container .btn,.cash-payment-container .btn.btn-confirm, .bus-stop-list li, .row .right, .btn-receipt';
                console.log('Break down - Using selector:', targetSelector);
            } else if (currentURL?.indexOf(routerUrls.private.main.rearDoor) > -1) {
                targetSelector = '.toggle-cv-container .btn';
                console.log('Rear Door - Using selector:', targetSelector);
            } else if (currentURL?.indexOf(routerUrls.private.main.endTrip) > -1) {
                targetSelector = '.end-trip-container .btn';
                console.log('End Trip - Using selector:', targetSelector);
            } else if (currentURL?.indexOf(routerUrls.private.main.settings) > -1) {
                targetSelector = '.settings-container .btn, .settings-list li';
                console.log('Settings - Using selector:', targetSelector);
            } else if (currentURL?.indexOf(routerUrls.private.main.languageSetting) > -1) {
                targetSelector = '.wrapper .language-opt, .wrapper .btn';
                console.log('Language Setting - Using selector:', targetSelector);
            } else if (
                currentURL?.indexOf(routerUrls.private.main.commissioning.inProgress) > -1 ||
                currentURL?.indexOf(routerUrls.private.main.commissioning.clearingAllData) > -1 ||
                currentURL?.indexOf(routerUrls.private.main.commissioning.completedClearning) > -1
            ) {
                targetSelector = '.commissioning-container .btn, .commissioning-container .button';
                console.log('Commissioning - Using selector:', targetSelector);
            } else if (currentURL?.indexOf(routerUrls.private.main.login) > -1) {
                targetSelector = '.login-container .btn, .login-container .button';
                console.log('Login - Using selector:', targetSelector);
            } else if (currentURL?.indexOf(routerUrls.private.main.manualLogin) > -1) {
                targetSelector = '.manual-login-container .btn, .manual-login-container .button';
                console.log('Manual Login - Using selector:', targetSelector);
            } else if (currentURL?.indexOf(routerUrls.private.main.tapCardLogin) > -1) {
                targetSelector = '.tap-card-login-container .btn, .tap-card-login-container .button';
                console.log('Tap Card Login - Using selector:', targetSelector);
            } else if (currentURL?.indexOf(routerUrls.private.main.dateTimeSetting) > -1) {
                targetSelector = '.date-time-setting-container .btn, .date-time-setting-container .button';
                console.log('Date Time Setting - Using selector:', targetSelector);
            } else if (currentURL?.indexOf(routerUrls.private.main.fareConsoleSetting) > -1) {
                targetSelector = '.wrapper .btn, .wrapper .button';
            } else if (currentURL?.indexOf(routerUrls.private.main.lockScreen) > -1) {
                targetSelector = '.lock-screen-container .btn, .lock-screen-container .button';
                console.log('Lock Screen - Using selector:', targetSelector);
            } else if (currentURL?.indexOf(routerUrls.private.main.dagwOperation) > -1) {
                targetSelector = '.dagw-operation-container .btn, .dagw-operation-container .button';
                console.log('DAGW Operation - Using selector:', targetSelector);
            } else {
                targetSelector = 'button, .btn';
            }

            const els = document.querySelectorAll(targetSelector);
            const elmIdex = getRandomInt(0, els.length - 1);
            const el = els[elmIdex];
            if (el) {
                el.click();
                console.log('Clicked:', el.textContent);
            } else {
                console.warn('Element not found:', targetSelector);
            }
        }, interval);

        console.log('Auto clicker started:', targetSelector, 'every', interval, 'ms');
    }
}

function stopAutoClicker() {
    clearInterval(autoClickInterval);
    console.log('Auto clicker stopped');
}

export { startAutoClicker, stopAutoClicker };

// Example:
// startAutoClicker(2000); // click every 2s
