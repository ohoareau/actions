# AWS Role Profile Add javascript action

This action creates/updates the ~/.aws/config file and store a new profile in it.

## Inputs

### `name`

**Required** The name of the profile to add.

### `source`

**Required** The name of the source profile to extend

### `role`

**Required** The Role ARN

## Outputs

None.

## Example usage

    uses: ohoareau/actions/aws-role-profile-add
    with:
      name: 'x'
      source: 'default'
      role: 'arn:...'