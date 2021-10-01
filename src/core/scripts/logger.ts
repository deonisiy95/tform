import moment from 'moment';

declare namespace ILogger {
  interface ILoggerInterface {
    log(...args: any[]): any;

    warn(...args: any[]): any;

    info(...args: any[]): any;

    error(...args: any[]): any;

    [key: string]: any;
  }
}

const COLORS = {
  default: '#9A9A9A',
  error: 'red',
  warn: 'orange',
  store: '#269ED6',
  redux: '#269ED6',
  actions: '#269ED6',
  controllers: '#2155D0',
  components: '#9BC800',
  api: '#954DD1'
};

const ORIGINALS: ILogger.ILoggerInterface = (window.console as any).originals ? {
  ...(window.console as any).originals
} : {
  log: window.console.log,
  warn: window.console.warn,
  info: window.console.info,
  error: window.console.error
};

function getComponentColor(componentName: string) {
  componentName = componentName.toLowerCase();
  let color = COLORS.default;

  if (componentName.includes('action')) {
    color = COLORS.actions;
  } else if (componentName.includes('store') || componentName.includes('storage')) {
    color = COLORS.store;
  } else if (componentName.includes('redux')) {
    color = COLORS.redux;
  } else if (
    componentName.includes('controller') ||
    componentName.includes('ctrl') ||
    componentName.includes('worker')
  ) {
    color = COLORS.controllers;
  } else if (componentName.includes('component')) {
    color = COLORS.components;
  } else if (componentName.includes('api')) {
    color = COLORS.api;
  }

  return color;
}

const selfWindow = window;
const fireConsole = (type: string, componentName: string, args: any[]) => {
  let color = COLORS.default;
  if (componentName) {
    componentName += ':';
    if (type === 'warn') {
      componentName += ' WARN';
      color = COLORS.warn;
    } else if (type === 'error') {
      componentName += ' ERROR';
      color = COLORS.error;
    } else {
      color = getComponentColor(componentName);
    }
  }

  const time = `[${moment().format('HH:mm:ss SSS')}] ${componentName}`;
  let argsToDisplay = [`%c${time}`, `color: ${color}`, ...args.slice(0)];

  if (selfWindow.console[type].apply) {
    ORIGINALS[type].apply(selfWindow.console, argsToDisplay);
  } else {
    ORIGINALS[type](argsToDisplay.join());
  }
};

const setName = (componentName: string): ILogger.ILoggerInterface => {
  return {
    log: (...args: any[]): void => {
      fireConsole('log', componentName, args);
    },
    info: (...args: any[]): void => {
      fireConsole('info', componentName, args);
    },
    warn: (...args: any[]): void => {
      fireConsole('warn', componentName, args);
    },
    error: (...args: any[]): void => {
      fireConsole('error', componentName, args);
    }
  };
};

const globalConsole = setName('GLOBAL');
window.console.log = globalConsole.log;
window.console.warn = globalConsole.warn;
window.console.info = globalConsole.info;
window.console.error = globalConsole.error;
(window.console as any).originals = ORIGINALS;

export default (componentName: string): ILogger.ILoggerInterface => {
  return setName(componentName);
};

export {ILogger};
