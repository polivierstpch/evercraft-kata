using Evercraft.Core;
using FluentAssertions;
using Xunit;

namespace Evercraft.Tests
{
    public class CharacterShould
    {

        private Character character = new Character();

        [Fact]
        public void HaveDefaultValuesAtCreation()
        {
            character.Name.Should().Be(Character.DEFAULT_NAME);
            character.Alignment.Should().Be(Character.DEFAULT_ALIGNMENT);
            character.ArmorClass.Should().Be(Character.BASE_AC);
        }

        [Theory]
        [InlineData("Zangdar", Alignment.Evil)]
        [InlineData("Numie", Alignment.Neutral)]
        [InlineData("Kalderan", Alignment.Good)]
        public void BeAbleToHaveItsPropertiesChanged(string name, Alignment alignment)
        {
            character.Name = name;
            character.Alignment = alignment;

            character.Name.Should().Be(name);
            character.Alignment.Should().Be(alignment);
        }

    }
}
