<?php
/**
 * This file has been automatically generated by TDBM.
 *
 * DO NOT edit this file, as it might be overwritten.
 * If you need to perform changes, edit the DoctrineMigrationVersion class instead!
 */

declare(strict_types=1);

namespace App\Domain\Model\Generated;

use TheCodingMachine\TDBM\AbstractTDBMObject;
use TheCodingMachine\TDBM\ResultIterator;
use TheCodingMachine\TDBM\AlterableResultIterator;
use Ramsey\Uuid\Uuid;
use JsonSerializable;
use TheCodingMachine\TDBM\Schema\ForeignKeys;
use TheCodingMachine\GraphQLite\Annotations\Field as GraphqlField;

/**
 * The BaseDoctrineMigrationVersion class maps the 'doctrine_migration_versions'
 * table in database.
 */
abstract class BaseDoctrineMigrationVersion extends \TheCodingMachine\TDBM\AbstractTDBMObject implements JsonSerializable
{

    /**
     * @var \TheCodingMachine\TDBM\Schema\ForeignKeys
     */
    private static $foreignKeys = null;

    /**
     * The constructor takes all compulsory arguments.
     *
     * @param string $version
     */
    public function __construct(string $version)
    {
        parent::__construct();
        $this->setVersion($version);
    }

    /**
     * The getter for the "version" column.
     *
     * @return string
     */
    public function getVersion() : string
    {
        return $this->get('version', 'doctrine_migration_versions');
    }

    /**
     * The setter for the "version" column.
     *
     * @param string $version
     */
    public function setVersion(string $version) : void
    {
        $this->set('version', $version, 'doctrine_migration_versions');
    }

    /**
     * The getter for the "executed_at" column.
     *
     * @return \DateTimeImmutable|null
     */
    public function getExecutedAt() : ?\DateTimeImmutable
    {
        return $this->get('executed_at', 'doctrine_migration_versions');
    }

    /**
     * The setter for the "executed_at" column.
     *
     * @param \DateTimeImmutable|null $executed_at
     */
    public function setExecutedAt(?\DateTimeImmutable $executed_at) : void
    {
        $this->set('executed_at', $executed_at, 'doctrine_migration_versions');
    }

    /**
     * The getter for the "execution_time" column.
     *
     * @return int|null
     */
    public function getExecutionTime() : ?int
    {
        return $this->get('execution_time', 'doctrine_migration_versions');
    }

    /**
     * The setter for the "execution_time" column.
     *
     * @param int|null $execution_time
     */
    public function setExecutionTime(?int $execution_time) : void
    {
        $this->set('execution_time', $execution_time, 'doctrine_migration_versions');
    }

    /**
     * Internal method used to retrieve the list of foreign keys attached to this bean.
     */
    protected static function getForeignKeys(string $tableName) : \TheCodingMachine\TDBM\Schema\ForeignKeys
    {
        if ($tableName === 'doctrine_migration_versions') {
            if (self::$foreignKeys === null) {
                self::$foreignKeys = new ForeignKeys([

                ]);
            }
            return self::$foreignKeys;
        }
        return parent::getForeignKeys($tableName);
    }

    /**
     * Serializes the object for JSON encoding.
     *
     * @param bool $stopRecursion Parameter used internally by TDBM to stop embedded
     * objects from embedding other objects.
     * @return array
     */
    public function jsonSerialize(bool $stopRecursion = false)
    {
        $array = [];
        $array['version'] = $this->getVersion();
        $array['executedAt'] = ($date = $this->getExecutedAt()) ? $date->format('c') : null;
        $array['executionTime'] = $this->getExecutionTime();
        return $array;
    }

    /**
     * Returns an array of used tables by this bean (from parent to child
     * relationship).
     *
     * @return string[]
     */
    public function getUsedTables() : array
    {
        return [ 'doctrine_migration_versions' ];
    }

    public function __clone()
    {
        parent::__clone();
    }
}
