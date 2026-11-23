<?php

namespace Symfony\Config;

use Symfony\Component\Config\Loader\ParamConfigurator;
use Symfony\Component\Config\Definition\Exception\InvalidConfigurationException;

/**
 * This class is automatically generated to help in creating a config.
 */
class LiveComponentConfig implements \Symfony\Component\Config\Builder\ConfigBuilderInterface
{
    private $secret;
    private $fetchCredentials;
    private $_usedProperties = [];

    /**
     * The secret used to compute fingerprints and checksums
     * @default '%kernel.secret%'
     * @param ParamConfigurator|mixed $value
     * @return $this
     */
    public function secret($value): static
    {
        $this->_usedProperties['secret'] = true;
        $this->secret = $value;

        return $this;
    }

    /**
     * The default fetch credentials mode for all Live Components ('same-origin', 'include', 'omit')
     * @default 'same-origin'
     * @param ParamConfigurator|'same-origin'|'include'|'omit' $value
     * @return $this
     */
    public function fetchCredentials($value): static
    {
        $this->_usedProperties['fetchCredentials'] = true;
        $this->fetchCredentials = $value;

        return $this;
    }

    public function getExtensionAlias(): string
    {
        return 'live_component';
    }

    public function __construct(array $value = [])
    {
        if (array_key_exists('secret', $value)) {
            $this->_usedProperties['secret'] = true;
            $this->secret = $value['secret'];
            unset($value['secret']);
        }

        if (array_key_exists('fetch_credentials', $value)) {
            $this->_usedProperties['fetchCredentials'] = true;
            $this->fetchCredentials = $value['fetch_credentials'];
            unset($value['fetch_credentials']);
        }

        if ([] !== $value) {
            throw new InvalidConfigurationException(sprintf('The following keys are not supported by "%s": ', __CLASS__).implode(', ', array_keys($value)));
        }
    }

    public function toArray(): array
    {
        $output = [];
        if (isset($this->_usedProperties['secret'])) {
            $output['secret'] = $this->secret;
        }
        if (isset($this->_usedProperties['fetchCredentials'])) {
            $output['fetch_credentials'] = $this->fetchCredentials;
        }

        return $output;
    }

}
