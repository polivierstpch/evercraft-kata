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
            // Settable properties
            character.Name.Should().Be(Character.DEFAULT_NAME);
            character.Alignment.Should().Be(Character.DEFAULT_ALIGNMENT);

            // Computed properties
            character.ArmorClass.Should().Be(Character.BASE_AC);
            character.HitPoints.Should().Be(Character.BASE_HITPOINTS);
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

        [Theory]
        [InlineData(10, true)]
        [InlineData(11, true)]
        [InlineData(15, true)]
        [InlineData(20, true)]
        [InlineData(9, false)]
        [InlineData(5, false)]
        public void BeAbleToAttackAnotherCharacter(int roll, bool expectedResult)
        {
            var target = new Character();

            bool attackResult = character.Attack(roll, target);

            attackResult.Should().Be(expectedResult);
        }

    }
}
