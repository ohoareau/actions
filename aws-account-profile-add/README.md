# AWS Account Profile Add javascript action

This action creates/updates the ~/.aws/credentials file and store a new profile in it.

## Inputs

### `name`

**Required** The name of the profile to add.

### `aki`

**Required** The Access Key ID (AWS)

### `sak`

**Required** The Secret Access Key (AWS)

## Outputs

None.

## Example usage

    uses: ohoareau/actions/aws-account-profile-add
    with:
      name: 'default'
      aki: 'A...'
      sak: 'D...'